import { expect, test, TestWrapper } from "./setup";
import RootLayout from "@/app/layout";
import { render } from "@testing-library/react";

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
