//Importing packages (test and expect) from playwright/test module 
import { test, expect } from'@playwright/test';
import {LogInWebpage} from '../webpages/LogInWebpage';
const fixtures = require('../fixtures/uniportal.json');


// Pass fixture "page" to access locator's, action's and assertion's methods
// Because JavaScript is an asychnronous programming language the steps might be executed asynchronously.
// The steps of the test cases should be executed in a very specific order!
// In order to avoid asynchronous execution the keywords "async" and "await are used".
// "async" keyword will require the arrow function to return a promise
// "await" keyword will force arrow function to wait for a promise before continuing the execution.
// That way, steps are executed in order which is on of the standards of automation testing.

test('TC01_LogInCorrectUsernameCorrectPasswordOK', async ({ page }) => {
    //Creation of an object of LogInWebpage
    const logInWebpage =  new LogInWebpage(page);
    //Visit uniportal Webpage
    logInWebpage.goToLogInWebpage();
    //Log in action
    logInWebpage.logIn(fixtures.username, fixtures.password);
    await page.waitForTimeout(8000);

    // Expect a title "to have" the following String value
    await expect(page).toHaveTitle('Πύλη Φοιτητολογίου');

    // Wait for 5 seconds for demonstration reasons
    await page.waitForTimeout(5000);
    

});

