import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chess-agent-83252463.figma.site/');
  await expect(page.getByTestId('logo-link')).toBeVisible();
  await page.getByTestId('add-to-cart-prod-001').click();
  await page.getByTestId('add-to-cart-prod-002').click();
  await page.getByTestId('cart-link').click();
  await expect(page.getByTestId('cart-heading').getByText('(2 items)')).toBeVisible();
  await page.getByTestId('cart-item-price-prod-001').click();
  await page.getByTestId('cart-item-price-prod-002').click();
  await page.getByTestId('cart-item-price-prod-002').click();
  await page.getByTestId('cart-subtotal').click();
  await page.getByTestId('checkout-button').click();

  await page.getByTestId('checkout-mode-registered').click();
  await page.getByTestId('demo-login-user-001').click();
  await page.getByTestId('login-submit-button').click();
  await page.getByTestId('continue-to-payment-button').click();
  await page.getByTestId('payment-scenario-failure').check();
  await page.getByTestId('payment-card-name').click();
  await page.getByTestId('payment-card-name').fill('Alice');
  await page.getByTestId('payment-card-number').click();
  await page.getByTestId('payment-card-number').fill('4000 0000 0000 0002');
  await page.getByTestId('payment-expiry').click();
  await page.getByTestId('payment-expiry').fill('11/341');
  await page.getByTestId('payment-cvv').click();
  await page.getByTestId('payment-cvv').fill('123');
  await page.getByTestId('place-order-button').click();
  await expect(page.getByTestId('payment-general-error')).toBeVisible();
});

 
  await page.getByTestId('cart-qty-increase-prod-002').click();
  await page.getByTestId('cart-remove-prod-001').click();
