import { expect, test } from '@playwright/test'

test.describe('Bookish application', () => {
  test('Visits the bookish', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    await expect(page.getByTestId('heading')).toContainText('Bookish')
  })
})
