import { test, expect } from '@playwright/test';

test('Prueba 2: Login con email y contraseña incorrectos', async ({ page }) => {
  await page.goto('http://automationexercise.com');

  await expect(page).toHaveURL(/automationexercise\.com/);

  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await expect(page.locator('text=Login to your account')).toBeVisible();

  await page.locator('[data-qa="login-email"]').fill('fakeuser@email.com');
  await page.locator('[data-qa="login-password"]').fill('wrongpassword');

  await page.locator('[data-qa="login-button"]').click();

  await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();
});