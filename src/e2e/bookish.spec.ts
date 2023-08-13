import { expect, test } from '@playwright/test'

test.describe('Bookish application', () => {
  test('Visits the bookish', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    await expect(page.getByTestId('heading')).toContainText('Bookish')
  })

  test('Shows a book list', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    await expect(page.getByTestId('book-list')).toBeVisible()
    await expect(page.locator('.book-item')).toHaveCount(2)
    const bookTitles = await page.locator('.book-item h2').allTextContents()
    expect(bookTitles).toEqual(['Refactoring', 'Domain-driven design'])
    await expect(page.locator('.book-item h2')).toHaveText([
      'Refactoring',
      'Domain-driven design',
    ])
  })
})
