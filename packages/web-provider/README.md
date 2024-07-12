# Hypertune OpenFeature Web Provider

This package contains a provider for using Hypertune with the OpenFeature [JS Web SDK](https://www.npmjs.com/package/@openfeature/web-sdk). If you want to use Hypertune with OpenFeature on the server then checkout the [Hypertune OpenFeature Server Provider](<https://www.npmjs.com/package/@hypertune/openfeature-server-provider)>).

## Hypertune overview

[Hypertune](https://www.hypertune.com/) is the most flexible platform for feature flags, A/B testing, analytics and app configuration. Built with full end-to-end type-safety, Git-style version control and local, synchronous, in-memory flag evaluation. Optimized for TypeScript, React and Next.js.

# Quick start

### 1. Installation

```sh
npm install @openfeature/web-sdk
npm install @hypertune/openfeature-web-provider
```

### 2. Usage

```ts
import { OpenFeature } from "@openfeature/web-sdk";
import { HypertuneProvider } from "@hypertune/openfeature-web-provider";

// Register Hypertune feature flag provider
await OpenFeature.setProviderAndWait(
  new HypertuneProvider({
    token: "YOUR_HYPERTUNE_TOKEN",
  }),
  // Pass in a context that matches the schema of your Hypertune project
  {
    environment: "development",
    user: {
      id: "user_123",
      name: "Dev User",
      email: "test@hypertune.com",
    },
  }
);

// Create a new client
const client = OpenFeature.getClient();

// Evaluate your feature flag
const exampleFlag = client.getBooleanValue("exampleFlag", false);

if (exampleFlag) {
  console.log("exampleFlag is enabled");
}
```

## OpenFeature Specific Considerations

### Accessing nested flags

To access nested flags you can use a dot separated path to your flag e.g. `backend.exampleFlag`. Values in a list can only be accessed by first evaluating the list flag as an object using the `getObjectValue` method.

### Publishing events

To publish an event you can evaluate an event trigger flag using the `getBooleanValue` method.

### Flag-specific arguments

Flag-specific arguments are not supported for individual flags with this OpenFeature provider. Trying to evaluate a flag with arguments will result in an error and the default/fallback value will be used. The only way to pass inputs to Hypertune is via the top level context.
