import { expect, test, TestWrapper } from "./setup";
import RootLayout from "@/app/layout";
import { render } from "@testing-library/react";
import { mockFont } from "./mocks/next";

// Mock Next.js font using direct module override
import { Inter } from "next/font/google";
Object.defineProperty(Inter, "className", { value: mockFont.className });

test("RootLayout", () => {
  const { container } = render(
    <TestWrapper>
      <RootLayout>
        <div>Test content</div>
      </RootLayout>
    </TestWrapper>
  );

  expect(container).toBeDefined();
  expect(container.innerHTML).toContain("Test content");
});
