import {
  EvaluationContext,
  JsonValue,
  OpenFeatureEventEmitter,
  Provider,
  ProviderEvents,
  ResolutionDetails,
} from "@openfeature/web-sdk";
import { HypertuneProviderBase } from "@hypertune/openfeature-base-provider";

export class HypertuneProvider
  extends HypertuneProviderBase
  implements Provider
{
  metadata = {
    name: HypertuneProvider.name,
  };
  events = new OpenFeatureEventEmitter();
  hooks = [];
  readonly runsOn = "client";

  protected postCreate(): void {
    this._source.addUpdateListener((_, { becameReady }) => {
      if (!becameReady) {
        this.events.emit(ProviderEvents.ConfigurationChanged);
      }
    });
  }

  onContextChange(
    oldContext: EvaluationContext,
    newContext: EvaluationContext
  ): void {
    this.setRoot(newContext);
  }

  resolveBooleanEvaluation(
    flagKey: string,
    defaultValue: boolean,
    context?: EvaluationContext
  ): ResolutionDetails<boolean> {
    return this.resolveValue(flagKey, defaultValue, context, "boolean");
  }

  resolveStringEvaluation(
    flagKey: string,
    defaultValue: string,
    context?: EvaluationContext
  ): ResolutionDetails<string> {
    return this.resolveValue(flagKey, defaultValue, context, "string");
  }

  resolveNumberEvaluation(
    flagKey: string,
    defaultValue: number,
    context?: EvaluationContext
  ): ResolutionDetails<number> {
    return this.resolveValue(flagKey, defaultValue, context, "number");
  }

  resolveObjectEvaluation<U extends JsonValue>(
    flagKey: string,
    defaultValue: U,
    context?: EvaluationContext
  ): ResolutionDetails<U> {
    return this.resolveValue(flagKey, defaultValue, context, "any");
  }
}
