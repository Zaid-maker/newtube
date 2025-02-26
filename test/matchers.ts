import { expect } from "bun:test";
import * as matchers from "@testing-library/jest-dom/matchers";

// Add custom matchers
Object.assign(expect.prototype, matchers);

declare module "bun:test" {
  interface Expect {
    toBeInTheDocument(): boolean;
    toBeVisible(): boolean;
    toBeDisabled(): boolean;
    toBeEnabled(): boolean;
    toBeEmptyDOMElement(): boolean;
    toHaveTextContent(text: string | RegExp): boolean;
    toHaveValue(value: string | string[] | number | null): boolean;
    toHaveStyle(css: Partial<CSSStyleDeclaration>): boolean;
    toHaveClass(...classNames: string[]): boolean;
    toHaveFocus(): boolean;
    toBeChecked(): boolean;
    toBeEmpty(): boolean;
    toContainElement(element: HTMLElement | null): boolean;
    toContainHTML(html: string): boolean;
    toHaveAttribute(attr: string, value?: string): boolean;
    toHaveDescription(text?: string | RegExp): boolean;
  }
}
