import {test, Locator, Page, Browser, expect} from "@playwright/test";
import {webkit, chromium, firefox} from 'playwright';

test('red bus', async () => {
    const browser:Browser =  await chromium.launch({headless: false});
    const page:Page = await browser.newPage();
    await page.goto('https://www.redbus.in/');

    const fromTextBoxXpath  = "//label[contains(.,'From')]/preceding-sibling::input";
    const toTextBoxXpath = "//label[contains(.,'To')]/preceding-sibling::input";

    const fromTextBox:Locator = page.locator(fromTextBoxXpath);
    const toTextBox:Locator = page.locator(toTextBoxXpath);

    await fromTextBox.fill('Coimbatore');
    await toTextBox.fill('Bangalore');

    const calendar = page.locator('#onwardCal');
    await calendar.click();

    const monthYear = page.locator('//div[contains(@class,"DayNavigator__IconBlock")][2]');
    const nextMonthBtn = page.locator('//div[contains(@class,"DayNavigator__IconBlock")][3]');
    const dateBtn = page.locator('//span[contains(@class,"DayTiles__CalendarDays") and contains(.,"25")]');



    while (1) {
        await page.locator('//div[contains(@class,"DayNavigator__IconBlock")][3]').click();
        if((await monthYear.innerText()).includes('Oct 2024')){
            dateBtn.click();
            break;
        }
           
    }

    const dateSelect = page.locator('//text[@class="dateText"]');
    const yearSelect = page.locator('.yearText');
    console.log( await dateSelect.textContent());
    console.log( await yearSelect.textContent());

    expect(await dateSelect.textContent()).toEqual('25 Oct');
    expect(await yearSelect.textContent(),'Problem in Year Selection').toEqual('2024');
    
});