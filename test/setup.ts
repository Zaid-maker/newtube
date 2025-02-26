import { expect, test, afterEach } from "bun:test";
import { cleanup } from "@testing-library/react";
import { TestWrapper } from "./test-utils";
import "./matchers";
import { Inter } from "./mocks/next-font";

// Define custom require interface with specific types
interface ModuleCache {
  [key: string]: {
    exports: unknown;
    loaded: boolean;
  };
}

interface RequireExtensions {
  [key: string]: (module: unknown, filename: string) => void;
}

interface CustomRequire {
  (id: string): unknown;
  cache: ModuleCache;
  extensions: RequireExtensions;
  resolve: (id: string) => string;
  prototype: (module: string) => unknown;
}

// Mock next/font using Bun's mock
globalThis.process = {
  ...globalThis.process,
  env: { NODE_ENV: "test" },
};

// Add properly typed mock for require
const mockRequire = globalThis.require as CustomRequire;
mockRequire.cache = {};
mockRequire.extensions = {};
mockRequire.resolve = (modulePath: string) => modulePath;

// Override require for next/font/google
mockRequire.prototype = (module: string): unknown => {
  if (module === "next/font/google") {
    return { Inter };
  }
  return mockRequire(module);
};

// Cleanup after each test
afterEach(() => {
  cleanup();
});

export { expect, test, TestWrapper };
