import { test, expect } from '@playwright/test';

test('verify that the practice store loads its catalogue', async ({ page }) => {
  await page.goto('/practice/tumble-kitchen/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Tumble Kitchen');
  await expect(page.getByTestId('product-list')).toBeVisible();
  await expect(page.getByTestId('product-card')).not.toHaveCount(0);
});

test('verify that searching for sorrel returns matching dishes', async ({ page }) => {
  await page.goto('/practice/tumble-kitchen/');
  await page.getByTestId('search-input').fill('sorrel');
  await page.getByTestId('search-submit').click();
  await expect(page.getByTestId('products-status')).toContainText(/dish/i);
  await expect(page.getByTestId('product-card')).not.toHaveCount(0);
});
