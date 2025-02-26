import { expect } from "bun:test";
import * as matchers from "@testing-library/jest-dom/matchers";

// Add custom matchers
Object.assign(expect.prototype, matchers);

declare module "bun:test" {
  interface Expect extends matchers.TestingLibraryMatchers<any, void> {}
}
