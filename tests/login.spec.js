import { test, expect } from '@playwright/test';

test('Prueba 1: Login con email y contraseña correctos', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page).toHaveURL(/automationexercise\.com/);

  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await expect(page.locator('text=Login to your account')).toBeVisible();

  await page.locator('[data-qa="login-email"]').fill('correo@test.com');
  await page.locator('[data-qa="login-password"]').fill('password');

  await page.locator('[data-qa="login-button"]').click();

  await expect(page.locator('text=Logged in as')).toBeVisible();

  await page.getByRole('link', { name: 'Logout' }).click();

  await expect(page.locator('text=Login to your account')).toBeVisible();
});