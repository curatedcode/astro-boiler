import { expect, test } from "tests/e2e/axe-test";

test("homepage should be accessible", async ({ page, makeAxeBuilder }) => {
  await page.goto("/");

  const accessibilityResult = await makeAxeBuilder().analyze();

  expect(accessibilityResult.violations).toEqual([]);
});
