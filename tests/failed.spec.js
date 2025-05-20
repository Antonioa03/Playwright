// Importa las funciones necesarias del framework Playwright.
// `test` permite definir una prueba, y `expect` se usa para hacer verificaciones.
import { test, expect } from '@playwright/test';

// Define una prueba con el nombre 'Prueba 2: Login con email y contraseña incorrectos'.
test('Prueba 2: Login con email y contraseña incorrectos', async ({ page }) => {

  // Abre la página principal del sitio web.
  await page.goto('http://automationexercise.com');

  // Verifica que la URL cargada contiene 'automationexercise.com'.
  await expect(page).toHaveURL(/automationexercise\.com/);

  // Hace clic en el enlace 'Signup / Login' para ir a la sección de inicio de sesión.
  await page.getByRole('link', { name: 'Signup / Login' }).click();

  // Espera a que el texto 'Login to your account' esté visible en la página.
  await expect(page.locator('text=Login to your account')).toBeVisible();

  // Rellena el campo de correo con un correo inválido o no registrado.
  await page.locator('[data-qa="login-email"]').fill('fakeuser@email.com');

  // Rellena el campo de contraseña con un valor incorrecto.
  await page.locator('[data-qa="login-password"]').fill('wrongpassword');

  // Hace clic en el botón para intentar iniciar sesión.
  await page.locator('[data-qa="login-button"]').click();

  // Verifica que se muestre el mensaje de error indicando que los datos son incorrectos.
  await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();
});
