// Importa los módulos necesarios de Playwright.
// `test` se usa para definir la prueba, y `expect` para realizar afirmaciones.
import { test, expect } from '@playwright/test'; 

// Define una prueba con el nombre 'Prueba 1: Login con email y contraseña correctos'.
test('Prueba 1: Login con email y contraseña correctos', async ({ page }) => {

  // Navega al sitio web principal de prueba.
  await page.goto('http://automationexercise.com');

  // Verifica que la URL cargada contiene 'automationexercise.com'.
  await expect(page).toHaveURL(/automationexercise\.com/);

  // Hace clic en el enlace 'Signup / Login' para ir a la página de inicio de sesión.
  await page.getByRole('link', { name: 'Signup / Login' }).click();

  // Espera a que el texto 'Login to your account' esté visible en la página.
  await expect(page.locator('text=Login to your account')).toBeVisible();

  // Rellena el campo de correo electrónico con un valor válido.
  await page.locator('[data-qa="login-email"]').fill('correo@test.com');

  // Rellena el campo de contraseña con un valor válido.
  await page.locator('[data-qa="login-password"]').fill('password');

  // Hace clic en el botón de inicio de sesión.
  await page.locator('[data-qa="login-button"]').click();

  // Verifica que el mensaje 'Logged in as' esté visible, indicando que el login fue exitoso.
  await expect(page.locator('text=Logged in as')).toBeVisible();

  // Hace clic en el enlace 'Logout' para cerrar sesión.
  await page.getByRole('link', { name: 'Logout' }).click();

  // Verifica que se ha regresado a la vista de inicio de sesión.
  await expect(page.locator('text=Login to your account')).toBeVisible();
});
