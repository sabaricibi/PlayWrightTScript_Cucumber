import {test} from '@playwright/test';
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';
import RegisterSuccessPage from '../pages/registerSuccessPage';
import * as Util from '../utils/DataUtil';

test('Register Page TC-1', async({page, baseURL}) => {
    const registerpage = new RegisterPage(page);
    const registerSuccesspage = new RegisterSuccessPage(page);
    
    await page.goto(`${baseURL}route=account/register`);
    
    const userData = new Map<string, string>;

    userData.set('firstName', 'Sabari');
    userData.set('lastName', 'Cibi');
    userData.set('email', Util.randomEmail());
    userData.set('telephone', '2545454');
    userData.set('password', 'Sabari@123');

   
    
   await registerpage.fillRegisterForm(userData);
   await registerSuccesspage.verifySuccess();
})

