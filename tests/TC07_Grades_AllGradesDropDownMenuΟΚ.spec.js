//Importing packages (test and expect) from playwright/test module 
import { test, expect } from'@playwright/test';
import {LogInWebpage} from '../webpages/LogInWebpage';
import {HomeWebpage} from '../webpages/HomeWebpage';
import {GradesWebpage} from '../webpages/GradesWebpage';
const fixtures = require('../fixtures/uniportal.json');

// Pass fixture "page" to access locator's, action's and assertion's methods
// Because JavaScript is an asychnronous programming language the steps might be executed asynchronously.
// The steps of the test cases should be executed in a very specific order!
// In order to avoid asynchronous execution the keywords "async" and "await are used".
// "async" keyword will require the arrow function to return a promise
// "await" keyword will force arrow function to wait for a promise before continuing the execution.
// That way, steps are executed in order which is on of the standards of automation testing.

test('TC07_Grades_AllGradesDropDownMenuΟΚ', async ({ page }) => {
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
    
    //Perform asssertion
    await homeWebPageObj.isGradesChoiceOfCentralMenuDisplayed();
    //Perform asssertion
    await homeWebPageObj.clickGradesChoiceOfCentralMenu();
    //Perform asssertions
    await homeWebPageObj.isMyBoardChoiceOfGradesOfCentralMenuDisplayed();
    await homeWebPageObj.isAllGradesChoiceOfGradesOfCentralMenuDisplayed();
    await homeWebPageObj.isByExamsPeriodChoiceOfGradesOfCentralMenuDisplayed();
    //Perform action
    await homeWebPageObj.clickAllGradesChoiceOfGradesOfCentralMenu();

    //Creation of an object of GradesWebpage
    const gradesWebpage = new GradesWebpage(page);

    //Perform asssertions
    await gradesWebpage.areAllGradesDetailsDisplayed();
    await gradesWebpage.isEntriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenuDisplayed();
    //Perform click action
    await gradesWebpage.clickEntriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu();

    //Wait to make sure that the webpage is loaded
    await page.waitForTimeout(3000);

    //Perform assertions
    await gradesWebpage.is50EntriesOptionDisplayed();
    await gradesWebpage.is100EntriesOptionDisplayed();
    await gradesWebpage.is200EntriesOptionDisplayed();
    await gradesWebpage.is500EntriesOptionDisplayed();
    await gradesWebpage.areAllEntriesOptionDisplayed();

    //Perform actions
    await gradesWebpage.selectEntrieDropDownListAllOption();
    await gradesWebpage.clickEntriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu();

    //Perform assertion
    await gradesWebpage.areAllEntriesDisplayed();
    
    //Wait for demonstration purposes
    await page.waitForTimeout(3000);
});
