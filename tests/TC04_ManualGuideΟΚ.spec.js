//Importing packages (test and expect) from playwright/test module 
import { test, expect } from'@playwright/test';
import {LogInWebpage} from '../webpages/LogInWebpage';
import {HomeWebpage} from '../webpages/HomeWebpage';
const fixtures = require('../fixtures/uniportal.json');

// Pass fixture "page" to access locator's, action's and assertion's methods
// Because JavaScript is an asychnronous programming language the steps might be executed asynchronously.
// The steps of the test cases should be executed in a very specific order!
// In order to avoid asynchronous execution the keywords "async" and "await are used".
// "async" keyword will require the arrow function to return a promise
// "await" keyword will force arrow function to wait for a promise before continuing the execution.
// That way, steps are executed in order which is on of the standards of automation testing.

test('TC04_ManualGuideΟΚ', async ({ page }) => {
    //Creation of an object of LogInWebpage
    const logInWebpage =  new LogInWebpage(page);
    //Visist webpage
    logInWebpage.goToLogInWebpage();
    //Perform Log In action
    logInWebpage.logIn(fixtures.username, fixtures.password);
    //Wait to make sure that the webpage is loaded
    await page.waitForTimeout(8000);

    //Creation of an object of HomeWebpage
    const homeWebPageObj = new HomeWebpage(page);
    
    //Wait to make sure that the webpage is loaded
    await page.waitForTimeout(5000);
    //Perform actions
    await homeWebPageObj.scrollToUserManualGuideOfCentralMenu();
    await homeWebPageObj.clickUserManualGuideOfCentralMenu();
    //Perform assertion
    await homeWebPageObj.assertUserManualGuideIsOpened();
    //Wait for demonstration purposes
    await page.waitForTimeout(3000);

});
