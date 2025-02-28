import { expect, test, afterEach } from "bun:test";
import { cleanup } from "@testing-library/react";
import { TestWrapper } from "./test-utils";
import "./matchers";

// Set test environment properly
Object.defineProperty(process, 'env', {
  value: { ...process.env, NODE_ENV: 'test' },
  configurable: true,
  writable: true
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});

export { expect, test, TestWrapper };
