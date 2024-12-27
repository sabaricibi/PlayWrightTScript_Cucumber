import {Page, Locator, expect} from '@playwright/test'

export default class RegisterSuccessPage{
    private page: Page;
    successMsg: Locator;

    constructor(page:Page){
        this.page = page;
        this.successMsg = this.page.locator('//p[contains(text(),"Congratulations! Your new account has been success")]');
    }

    async verifySuccess(): Promise<void> {
        await expect(this.successMsg).toBeVisible();
    }
}

