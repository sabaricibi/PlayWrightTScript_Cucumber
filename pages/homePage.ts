import {Page, Locator} from '@playwright/test'
export default class HomePage{
    page: Page;
    searchTextBox: Locator;
    searchBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.searchTextBox = page.locator('(//div[@id="search"]//input[@aria-label="Search For Products" and @type="text"])[1]');
        this.searchBtn = page.locator('//button[.="Search"]');
    }

    async searchProduct(keyword: string): Promise<void> {
       
        await this.searchTextBox.fill(keyword);
        await this.searchBtn.click();
    }
}