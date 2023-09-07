# PlaywrightThesisE2ETests
Playwright project for End to end and UI tests for (https://uniportal.ihu.gr)  

Node.js is required to run this project. Download node.js here from the official webpage --> (https://nodejs.org/en)
## Note:  
⚠️🚩<u><strong>Tests that require log in will not be executed after log in, since the password of my credentials is not pushed for security reasons.</strong></u>  
🚦🚫<u><strong>Test "TC08_Exams_ExamsCalendarΟΚ.spec.js" and "TC9_HamburgerMenuItemsWhenCollapsedΟΚ.spec.js" are failing because of bugs.</strong></u>  

## Project structure:  
- **fixtures/uniportal.json**  --> Parameters that are used for tests are included in this file.
- **node_modules**  --> in this directory Node.js modules and their dependencies are installed
- **playwright-report/index.html**  --> Test execution report of the last execution is produced in this file.
- **tests**  --> Folder which contains all the Test Scripts.
- **webpages**  --> This folder contains all the Webpages that have been used by tests. Each file represents a webpage and contains its corresponding Web - Element Locators, methods to retrieve Web Elements references, methods to perform actions on the Web Elements, and Assertions on the Web Elements.
- **package.json**  -->  This file is used to define and manage project dependencies, scripts, and other metadata.
- **playwright.config.js**  --> Confifuration file


## Test execution :rocket:
⚠️⚠️⚠️ATTENTION! NOT ALL TESTS SHOULD BE EXECUTED PARALLELY! IF TESTS WILL BE EXECUTED PARALLELY IT WILL POSSIBLY AFFECT THE AVAILABILITY OF (https://uniportal.ihu.gr). PLEASE DO NOT EXECUTE MORE THAN 3 TESTS IN PARALLEL...⚠️⚠️⚠️   
You can select the browser of your choice for the test execution by commenting/uncommenting the below file (please check the screenshot)
![image](https://github.com/CostasChou/PlaywrightThesisE2ETests/assets/97087053/a8fbeeed-fa9a-45a5-85fa-c5ffdf072d5d)

In the example below tests of "TC01_LogInCorrectUsernameCorrectPasswordOK.spec.js" will be executed in headed more and Chrome browser (which is by default uncommented).
```bash
npx playwright test TC01_LogInCorrectUsernameCorrectPasswordOK.spec.js --headed
```
▶︎ More info about execution:  :computer:
- You can choose the browser of the test execution by leaving all browser choices uncommented in  "playwright.config.js" file and then by setting the flag --project=borwser-name-goes-here 'to_the_correspodning_browser_name(e.g. Chrome, FireFox, Webkit (Safari)').
- Playwright runs tests on headless mode by default. If you want to run tests on headed more you can add this flag to your CLI execution command. E.g. --headed
  
▶︎ Other execution options: :bulb:
You can click on the play "▶︎" button in your Test Script file.

##📋 Test execution report should normally open automatically right after the execution of a script or a test suite.  

