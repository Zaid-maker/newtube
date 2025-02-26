import { expect, test } from "./setup";
import RootLayout from "@/app/layout";
import { render } from "@testing-library/react";

test("RootLayout", () => {
  const { container } = render(
    <RootLayout>
      <div>Test content</div>
    </RootLayout>
  );

  expect(container).toBeDefined();
  expect(container.innerHTML).toContain("Test content");
});
