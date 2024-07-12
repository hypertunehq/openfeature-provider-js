# Hypertune OpenFeature Server Provider

This package contains a provider for using Hypertune with the OpenFeature [JS Server SDK](https://www.npmjs.com/package/@openfeature/server-sdk). If you want to use Hypertune with OpenFeature in the client then checkout the [Hypertune OpenFeature Web Provider](<https://www.npmjs.com/package/@hypertune/openfeature-web-provider)>).

## Hypertune overview

[Hypertune](https://www.hypertune.com/) is the most flexible platform for feature flags, A/B testing, analytics and app configuration. Built with full end-to-end type-safety, Git-style version control and local, synchronous, in-memory flag evaluation. Optimized for TypeScript, React and Next.js.

# Quick start

### 1. Installation

```sh
npm install @openfeature/server-sdk
npm install @hypertune/openfeature-server-provider
```

### 2. Usage

```ts
import { OpenFeature } from "@openfeature/server-sdk";
import { HypertuneProvider } from "@hypertune/openfeature-server-provider";

// Register Hypertune feature flag provider
await OpenFeature.setProviderAndWait(
  new HypertuneProvider({
    token: "YOUR_HYPERTUNE_TOKEN",
  })
);

// Create a new client
const client = OpenFeature.getClient();

// Define a context that matches schema of your Hypertune project
const context = {
  environment: "test",
  user: {
    id: "user_123",
    name: "Test User",
    email: "test@hypertune.com",
  },
};

// Set global context or pass it to each flag evaluation
await OpenFeature.setContext(context)

// Evaluate your feature flag
const exampleFlag = await client.getBooleanValue("exampleFlag", false);

if (exampleFlag) {
  console.log("exampleFlag is enabled");
}
```

## OpenFeature Specific Considerations
### Accessing nested flags
To access nested flag you can simply evaluate a flag with dot separated path to your flag e.g. `backend.exampleFlag`. Values in a list can only be accesses by first evaluating the list flag as an object using the `getObjectValue` method.

### Publishing events
To publish an event you can simply evaluate an event trigger using the `getBooleanValue` method.

### Flag arguments
Flag arguments are not supported for individual flags by this OpenFeature provider. Trying to evaluate a flag with arguments with result in an error and the default/fallback value being used. The only way to pass inputs to Hypertune is via the top level context.
