import {test, expect, Browser, Page, Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('login test', async() => {
   const browser:Browser =  await chromium.launch({headless: false});
   const page:Page = await browser.newPage();
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
   
   const email:Locator =  page.locator('#input-email');
   const password:Locator = page.locator('#input-password');
   const loginBtn:Locator = page.locator("[value='Login']");

   await email.fill('sabari@opencart.com');
   await password.fill('Welcome@123');
   await loginBtn.click();

   const title = await page.title();
   console.log(title);

   await page.screenshot({path : 'homePage.png'})
   expect(title).toEqual('My Account');
   
  await browser.close();
   

});