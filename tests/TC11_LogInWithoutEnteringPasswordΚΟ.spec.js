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

test('TC11_LogInWithoutEnteringPasswordΚΟ', async ({ page }) => {
    //Creation of an object of LogInWebpage
    const logInWebpage =  new LogInWebpage(page);
    //Visist webpage
    logInWebpage.goToLogInWebpage();
    //Perform Log In action with NO PASSWORD
    logInWebpage.logIn(fixtures.username, fixtures.emptyString);

    //Wait to make sure that the webpage is loaded
    await page.waitForTimeout(6000);

    //Retrieve <body> referrence in pageTextContent variable
    const pageTextContent = await page.textContent('body');
    // Check if the text is present
    const isTextPresent = pageTextContent.includes('Password is a required field.');
      // Get the current page title
    await expect(isTextPresent).toBe(true);

    // Use an assertion to check the page title
    await expect(await page.title()).toBe('Login International Hellenic University - CAS');
});
