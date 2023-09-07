const { expect } = require("@playwright/test");

exports.LogInWebpage = 
class LogInWebpage{
    //Locators
    constructor(page){
        this.page = page;
        this.textFieldUsername = '#username' ; //id
        this.textFieldPassword = '#password'; //id
        this.buttonLogInButton = '#loginButton'; //id
    }

    //Actions
    async goToLogInWebpage(){
        await this.page.goto('https://sso.ihu.gr/login?service=https%3A%2F%2Funiportal.ihu.gr%2Flogin%2Fcas');
    }

    async logIn(username, password){
        await this.page.locator(this.textFieldUsername).fill(username);
        await this.page.locator(this.textFieldPassword).fill(password);
        await this.page.locator(this.buttonLogInButton).click();
    }
}