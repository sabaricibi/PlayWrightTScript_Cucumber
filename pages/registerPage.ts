import { Page, Locator } from '@playwright/test';

export default class RegisterPage {
    private page: Page;
    firstName: Locator;
    lastName: Locator;
    email: Locator;
    telePhone: Locator;
    password: Locator;
    confirmPassword: Locator;
    continueRegisterBtn: Locator;
    agreeTermsCheckBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = this.page.locator('#input-firstname');
        this.lastName = this.page.locator('#input-lastname');
        this.email = this.page.locator('#input-email');
        this.telePhone = this.page.locator('#input-telephone');
        this.password = this.page.locator('#input-password');
        this.confirmPassword = this.page.locator('#input-confirm');
        this.continueRegisterBtn = this.page.locator('//input[@value="Continue"]');
        this.agreeTermsCheckBox  = this.page.locator('//label[@for="input-agree"]');
    }

    async fillRegisterForm(userData: Map<string, string>): Promise<void> {
        await this.firstName.fill(userData.get('firstName') ?? '');
        await this.lastName.fill(userData.get('lastName')  ?? '');
        console.log(userData.get('email')  ?? '');
        await this.email.fill(userData.get('email')  ?? '');
        await this.telePhone.fill(userData.get('telephone')  ?? '');
        await this.password.fill(userData.get('password')  ?? '');
        await this.confirmPassword.fill(userData.get('password')  ?? '');
        await this.agreeTermsCheckBox.click();
        await this.continueRegisterBtn.click();
    }
}
