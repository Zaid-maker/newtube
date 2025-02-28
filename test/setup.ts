import { expect, test, afterEach } from "bun:test";
import { cleanup } from "@testing-library/react";
import { TestWrapper } from "./test-utils";
import { mockFont } from "./mocks/next";
import "./matchers";

// Define module types
interface MockedModules {
  'next/font/google': {
    Inter: () => {
      className: string;
      style: { fontFamily: string };
    };
  };
}

// Set test environment properly
Object.defineProperty(process, 'env', {
  value: { ...process.env, NODE_ENV: 'test' },
  configurable: true,
  writable: true
});

// Create base require function
const baseRequire = (module: string) => {
  throw new Error(`Module ${module} not mocked`);
};

// Create typed module cache
const moduleCache: MockedModules = {
  'next/font/google': {
    Inter: () => mockFont
  }
};

// Setup module resolution with proper types
const mockRequire = new Proxy(baseRequire, {
  apply(_target, _thisArg, args: [string]) {
    const [moduleName] = args;
    if (moduleName in moduleCache) {
      return moduleCache[moduleName as keyof MockedModules];
    }
    return baseRequire(moduleName);
  }
});

// Install mock require
Object.defineProperty(globalThis, 'require', {
  value: mockRequire,
  writable: true,
  configurable: true
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});

export { expect, test, TestWrapper };
