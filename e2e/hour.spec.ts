import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("homepage", () => {
  test("homepage snapshot", async ({ page }) => {
    await page.screenshot({ path: "screenshot.png", fullPage: true });
  });

  test.describe("form", () => {
    test("check if button disabled when inputs empty", async ({ page }) => {
      if (
        (await expect(page.locator("#moon")).toBeEmpty) &&
        (await expect(page.locator("#sun")).toBeEmpty) &&
        (await expect(page.locator("#earth")).toBeEmpty)
      ) {
        await expect(page.locator("#form-button")).toBeDisabled();
      }
    });

    test.describe("result text", () => {
      test("check if empty", async ({ page }) => {
        if (await expect(page.locator("#form-button")).toBeDisabled) {
          await expect(page.locator("#result")).toBeHidden();
        }
      });

      test("check if shown when button clicked", async ({ page }) => {
        await page.locator("#moon").click();
        await page.locator("#moon").fill("1");
        await page.locator("#sun").click();
        await page.locator("#sun").fill("1");
        await page.locator("#earth").click();
        await page.locator("#earth").fill("1");
        await page.locator("#form-button").click();
        await expect(page.locator("#result")).toBeVisible();
      });
    });
  });
});
