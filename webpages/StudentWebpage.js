const { expect } = require("@playwright/test");

exports.StudentWebpage = class StudentWebpage {
    //Locators
    constructor(page){
        this.page = page;
        this.studentDataTab = '//body[1]/div[7]/div[1]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[1]/a[1]';
        this.personalDataTab = '//body[1]/div[7]/div[1]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]';
    }

     // Retrieve Locators
    getStudentDataTabLocator() {
        return this.page.locator(this.studentDataTab);
    }

    getPersonalDataTabLocator() {
        return this.page.locator(this.personalDataTab);
    }

    // Actions
    async clickOnPersonalDataTabOfStudent() {
        await this.getPersonalDataTabLocator().click();
    }

    // Assertions
    async isStudentDataTabDisplayed() {
        await this.page.waitForTimeout(2000);
        await expect(this.getStudentDataTabLocator()).toBeVisible();
    }

    async isPersonalDataTabDisplayed() {
        await this.page.waitForTimeout(2000);
        await expect(this.getPersonalDataTabLocator()).toBeVisible();
    }

    async areStudentDataTabDetailsDisplayed() {
        await this.page.waitForTimeout(2000);
        const pageContent = await this.page.textContent('body'); // Get the text content of the entire page
        expect(pageContent).toContain('Γενικά στοιχεία'); // Check if the text is present in the page content
    }

    async arePersonalDataTabDetailsDisplayed() {
        await this.page.waitForTimeout(2000);
        const pageContent = await this.page.textContent('body'); // Get the text content of the entire page
        expect(pageContent).toContain('Ασφαλιστικά Στοιχεία'); // Check if the text is present in the page content
    }
}