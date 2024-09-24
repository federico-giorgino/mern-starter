import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173";

test("should allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URL);
  await page.getByRole("link", { name: "Login" }).click();

  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();

  await page.locator("[name=email]").fill("example@mail.com");
  await page.locator("[name=password]").fill("password");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});
