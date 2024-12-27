import{test, Page, expect} from '@playwright/test'
import HomePage from '../pages/homePage'

test('Search Product', async({page, baseURL}) => {
   
    await page.goto(baseURL ?? '');
    const homePage = new HomePage(page);
    await homePage.searchProduct('Macbook Air');
})