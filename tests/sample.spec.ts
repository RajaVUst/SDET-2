import { test, expect } from "@playwright/test";

test("Verify Playwright setup", async ({ page }) => {

    await page.goto("https://example.com");

    await expect(page).toHaveTitle(/Example Domain/);

});