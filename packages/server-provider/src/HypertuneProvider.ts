import {
  EvaluationContext,
  InvalidContextError,
  JsonValue,
  OpenFeatureEventEmitter,
  Provider,
  ProviderEvents,
  ResolutionDetails,
  TypeMismatchError,
} from "@openfeature/server-sdk";
import { HypertuneProviderBase } from "@hypertune/openfeature-base-provider";

export class HypertuneProvider
  extends HypertuneProviderBase
  implements Provider
{
  readonly metadata = {
    name: HypertuneProvider.name,
  } as const;
  events = new OpenFeatureEventEmitter();
  hooks = [];
  readonly runsOn = "server";

  protected postCreate(): void {
    this._source.addUpdateListener((_, { becameReady }) => {
      if (!becameReady) {
        this.events.emit(ProviderEvents.ConfigurationChanged);
      }
    });
  }

  resolveBooleanEvaluation(
    flagKey: string,
    defaultValue: boolean,
    context?: EvaluationContext
  ): Promise<ResolutionDetails<boolean>> {
    return this.resolveValueAsync(flagKey, defaultValue, context, "boolean");
  }

  resolveStringEvaluation(
    flagKey: string,
    defaultValue: string,
    context?: EvaluationContext
  ): Promise<ResolutionDetails<string>> {
    return this.resolveValueAsync(flagKey, defaultValue, context, "string");
  }

  resolveNumberEvaluation(
    flagKey: string,
    defaultValue: number,
    context?: EvaluationContext
  ): Promise<ResolutionDetails<number>> {
    return this.resolveValueAsync(flagKey, defaultValue, context, "number");
  }

  resolveObjectEvaluation<U extends JsonValue>(
    flagKey: string,
    defaultValue: U,
    context?: EvaluationContext
  ): Promise<ResolutionDetails<U>> {
    return this.resolveValueAsync(flagKey, defaultValue, context, "any");
  }

  private resolveValueAsync<T>(
    flagKey: string,
    defaultValue: T,
    context: EvaluationContext | undefined,
    expectedValueType: "boolean" | "string" | "number" | "any"
  ): Promise<ResolutionDetails<T>> {
    return Promise.resolve(
      this.resolveValue(flagKey, defaultValue, context, expectedValueType)
    );
  }
}
