import { expect, test, afterEach } from "bun:test";
import { cleanup } from "@testing-library/react";
import { TestWrapper } from "./test-utils";
import "@testing-library/jest-dom/matchers";

// Cleanup after each test
afterEach(() => {
  cleanup();
});

export { expect, test, TestWrapper };
