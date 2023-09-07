//Importing packages (test and expect) from playwright/test module 
import { test, expect } from'@playwright/test';
import {LogInWebpage} from '../webpages/LogInWebpage';
import { HomeWebpage } from '../webpages/HomeWebpage';
const fixtures = require('../fixtures/uniportal.json');

// Pass fixture "page" to access locator's, action's and assertion's methods
// Because JavaScript is an asychnronous programming language the steps might be executed asynchronously.
// The steps of the test cases should be executed in a very specific order!
// In order to avoid asynchronous execution the keywords "async" and "await are used".
// "async" keyword will require the arrow function to return a promise
// "await" keyword will force arrow function to wait for a promise before continuing the execution.
// That way, steps are executed in order which is on of the standards of automation testing.

test('TC9_HamburgerMenuItemsWhenCollapsedΟΚ', async ({ page }) => {
    //Creation of an object of LogInWebpage
    const logInWebpage =  new LogInWebpage(page);
    //Visit uniportal Webpage
    logInWebpage.goToLogInWebpage();
    //Log in action
    logInWebpage.logIn(fixtures.username, fixtures.password);
    await page.waitForTimeout(8000);

    //Perform assertion
    await expect(page.locator("a[data-toggle='tooltip']")).toBeVisible();   
    //Pefrom click action 
    await page.locator('#menu_toggle').click();   
    //Pefrom assertion (to check if Log Out choice is still visible after "menu collapse action") 
    await expect(page.locator("a[data-toggle='tooltip']")).toBeVisible();    

    // Wait for 3 seconds for demonstration reasons
    await page.waitForTimeout(3000);
});

