import { expect, test, afterEach } from "bun:test";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TestWrapper } from "./test-utils";

// Extend jest matchers
import type { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
declare module "bun:test" {
  interface Matchers<R> extends TestingLibraryMatchers<typeof expect, R> {}
}

// Cleanup after each test
afterEach(() => {
  cleanup();
});

export { expect, test, TestWrapper };
