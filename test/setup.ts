import { expect, test, afterEach } from "bun:test";
import { cleanup } from "@testing-library/react";
import { TestWrapper } from "./test-utils";
import { mockFont } from "./mocks/next";
import "./matchers";

// Set test environment using Object.defineProperty
Object.defineProperty(process, 'env', {
  value: { ...process.env, NODE_ENV: 'test' },
  configurable: true
});

// Mock Next.js modules
globalThis.require = new Proxy(globalThis.require, {
  apply(target, thisArg, argumentsList) {
    const [module] = argumentsList;
    if (module === "next/font/google") {
      return { Inter: () => mockFont };
    }
    return Reflect.apply(target, thisArg, argumentsList);
  },
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});

export { expect, test, TestWrapper };
