import { afterEach } from "bun:test";
import { cleanup } from "@testing-library/react";
import { expect, test } from "bun:test";
import { TestWrapper } from "./test-utils";

// Cleanup after each test
afterEach(() => {
  cleanup();
});

export { expect, test, TestWrapper };
