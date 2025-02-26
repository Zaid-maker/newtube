import { expect, test, afterEach } from "bun:test";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TestWrapper } from "./test-utils";

declare module "bun:test" {
  export interface Expect {
    toBeInTheDocument(): void;
    toHaveTextContent(text: string | RegExp): void;
    toBeVisible(): void;
    toContainHTML(html: string): void;
    toHaveClass(className: string): void;
  }
}

// Cleanup after each test
afterEach(() => {
  cleanup();
});

export { expect, test, TestWrapper };
