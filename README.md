# Automation Exercise Tests

Este proyecto contiene pruebas automatizadas para el sitio [Automation Exercise](https://automationexercise.com) utilizando Playwright con JavaScript.

## Casos de prueba implementados

1. **Test Case 1: Register User** - Prueba el registro exitoso de un nuevo usuario.
2. **Test Case 5: Register User with existing email** - Prueba el intento de registro con un correo electrónico ya existente (caso negativo).
3. **Test Case 14: Place Order: Register while Checkout** - Prueba el proceso completo de compra con registro durante el checkout.
4. **Test Case: Place order with missing payment information** - Prueba un escenario negativo donde falta información de pago requerida.

## Requisitos previos

- Node.js 16 o superior
- Visual Studio Code con la extensión Playwright instalada

## Instalación

1. Clonar este repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd automation-exercise-tests
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Instalar los navegadores de Playwright (si no se instalaron durante la configuración inicial):
   ```bash
   npx playwright install chromium firefox
   ```

## Ejecución de pruebas

Para ejecutar todas las pruebas en todos los navegadores configurados:
```bash
npx playwright test
```

Para ejecutar pruebas solo en Chrome:
```bash
npx playwright test --project=chromium
```

Para ejecutar pruebas solo en Firefox:
```bash
npx playwright test --project=firefox
```

Para ejecutar un archivo de prueba específico:
```bash
npx playwright test tests/register.spec.js
```

## Generación de reportes

Los reportes se generan automáticamente en la carpeta `playwright-report`. Para ver el reporte después de la ejecución:
```bash
npx playwright show-report
```

## Estructura del proyecto

```
automation-exercise-tests/
├── tests/
│   ├── register.spec.js       # Pruebas de registro de usuario
│   ├── order.spec.js          # Pruebas de proceso de compra
│   └── utils/
│       └── helper.js          # Funciones de utilidad para pruebas
├── playwright.config.js       # Configuración de Playwright
├── package.json
└── README.md
```

## Notas adicionales

- Las pruebas incluyen capturas de pantalla automáticas en caso de fallo.
- El proyecto está configurado para ejecutarse en Chrome y Firefox.
- Los casos de prueba están organizados en suites con nombres descriptivos.
- Se ha implementado manejo de errores para situaciones como anuncios emergentes.