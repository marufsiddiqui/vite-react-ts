import { expect, test } from '@playwright/test'
import axios from 'axios'

const books = [
  { name: 'Refactoring', id: 1 },
  { name: 'Domain-driven design', id: 2 },
  { name: 'Building Microservices', id: 3 },
]
const bookNames = books.map((item) => item.name)

test.describe('Bookish application', () => {
  test.beforeEach(async () => {
    try {
      await axios.delete('http://localhost:4000/books?_cleanup=true')
      await Promise.all(
        books.map((item) =>
          axios.post('http://localhost:4000/books', item, {
            headers: { 'Content-Type': 'application/json' },
          })
        )
      )
    } catch (err) {
      console.log('Error in beforeEach', err)
      return err
    }
  })
  test('Visits the bookish', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    await expect(page.getByTestId('heading')).toContainText('Bookish')
  })

  test('Shows a book list', async ({ page }) => {
    await page.goto('http://localhost:3000/')

    await expect(page.getByTestId('book-list')).toBeVisible()
    await expect(page.locator('.book-item')).toHaveCount(books.length)
    const bookTitles = await page.locator('.book-item h2').allTextContents()
    expect(bookTitles).toEqual(bookNames)
    await expect(page.locator('.book-item h2')).toHaveText(bookNames)
  })

  test('Goes to the detail page', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    await page.waitForResponse('http://localhost:4000/books')
    await page.getByText('View Details').first().click()
    await expect(page).toHaveURL(/\/books\/1/)
    await expect(page.locator('h2.book-title')).toContainText('Refactoring')
  })
})
