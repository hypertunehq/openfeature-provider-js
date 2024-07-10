import {
  EvaluationContext,
  InvalidContextError,
  ResolutionDetails,
  TypeMismatchError,
} from "@openfeature/core";
import {
  create,
  CreateOptions,
  Node,
  ObjectValueWithVariables,
  ObjectValue,
  Query,
  Value,
} from "hypertune";

export class HypertuneProviderBase {
  protected _source: Node;
  protected _root: Node | null = null;

  constructor({
    token,
    override,
    query = null,
    queryCode = "query Full{root{*}}",
    variableValues = {},
    ...options
  }: {
    token: string;
    query?: Query<ObjectValueWithVariables> | null;
    queryCode?: string;
    variableValues?: ObjectValue;
    override?: object | null;
  } & CreateOptions) {
    this._source = create({
      token,
      query,
      queryCode,
      override: override ? { root: override } : null,
      variableValues,
      NodeConstructor: Node,
      options,
    });
    this.postCreate()
  }

  protected postCreate(): void {}

  async initialize(context?: EvaluationContext): Promise<void> {
    if (!this._source.isReady()) {
      await this._source.initIfNeeded();
    }
    if (context) {
      this.setRoot(context);
    }
  }

  onClose(): Promise<void> {
    return this._source.close();
  }

  protected resolveValue<T>(
    flagKey: string,
    defaultValue: T,
    context: EvaluationContext | undefined,
    expectedValueType: "boolean" | "string" | "number" | "any"
  ): ResolutionDetails<T> {
    const root = this.getRoot(context);
    const fallback = defaultValue as Value;
    const value = flagKey
      .split(".")
      .reduce<Node>((node, step) => {
        return node.getFieldNode(step, {});
      }, root)
      .getValue({ fallback });

    if (expectedValueType !== "any" && typeof value !== expectedValueType) {
      throw new TypeMismatchError(
        `Invalid value type for flagKey "${flagKey}" expected "${expectedValueType}" got "${typeof value}".`
      );
    }

    return { value: value as T };
  }

  protected getRoot(context: EvaluationContext | undefined): Node {
    if (context) {
      return this.newRoot(context);
    }
    if (!this._root) {
      throw new InvalidContextError(
        "Missing context, ensure you set a global context or pass it during the flag evaluation."
      );
    }
    return this._root;
  }

  protected setRoot(context: EvaluationContext): void {
    this._root = this.newRoot(context);
  }

  protected newRoot(context: EvaluationContext): Node {
    // TODO: maybe throw error when null value is provided in the context.
    return this._source.getFieldNode("root", {
      fieldArguments: { context: context as ObjectValue },
    });
  }
}
