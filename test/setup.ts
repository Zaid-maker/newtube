import { expect, test, afterEach } from "bun:test";
import { cleanup } from "@testing-library/react";
import { TestWrapper } from "./test-utils";
import "./matchers";

// Define specific types for mocks
interface FontModule {
  Inter(): {
    className: string;
    style: { fontFamily: string };
  };
}

interface JestGlobal {
  requireActual: (module: string) => FontModule;
}

// Extend global types without using var
declare global {
  interface Global {
    jest: JestGlobal;
  }
}

// Set test environment
Object.defineProperty(process.env, "NODE_ENV", { value: "test" });

// Create mock object with proper type
const mockJest: JestGlobal = {
  requireActual: () => ({
    Inter: () => ({
      className: "mock-font",
      style: { fontFamily: "Inter" },
    }),
  }),
};

// Assign mock to global scope
Object.defineProperty(global, 'jest', {
  value: mockJest,
  writable: true,
  configurable: true,
});

// Mock Dynamic Imports
global.fetch = async (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  if (input.toString().includes("next/font")) {
    return new Response(JSON.stringify({ default: {} }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }
  return fetch(input, init);
};

// Cleanup after each test
afterEach(() => {
  cleanup();
});

export { expect, test, TestWrapper };
