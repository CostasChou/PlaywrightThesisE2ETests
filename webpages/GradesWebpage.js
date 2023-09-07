const { expect } = require("@playwright/test");

exports.GradesWebpage = class GradesWebpage {
    //Locators
    constructor(page){
        this.page = page;
        this.allGradesDetails = '.dataTables_wrapper.form-inline.dt-bootstrap.no-footer';
        this.entriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu = "[name$='student_grades_length']";
        this.entrieDropDownList50Option = "option[value='50']";
        this.entrieDropDownList100Option = "option[value='100']";
        this.entrieDropDownList200Option = "option[value='200']";
        this.entrieDropDownList500Option = "option[value='500']";
        this.entrieDropDownListAllOption = "option[value='Όλες']";

    }

     // Retrieve Locators
    getAllGradesDetails() {
        return this.page.locator(this.allGradesDetails);
    }

    getEntriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu() {
        return this.page.locator(this.entriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu);
    }

    getEntrieDropDownList50Option() {
        return this.page.locator(this.entrieDropDownList50Option);
    }

    getEntrieDropDownList100Option() {
        return this.page.locator(this.entrieDropDownList100Option);
    }

    getEntrieDropDownList200Option() {
        return this.page.locator(this.entrieDropDownList200Option);
    }

    getEntrieDropDownList500Option() {
        return this.page.locator(this.entrieDropDownList500Option);
    }

    getEntrieDropDownListAllOption() {
        return this.page.locator(this.entrieDropDownListAllOption);
    }

    // Actions
    async clickEntriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu() {
        await this.page.locator(this.entriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu).click();
    }

    async selectEntrieDropDownListAllOption() {
        await this.page.locator(this.entriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu).selectOption({ index: 4 })
    }


    // Assertions
    async areAllGradesDetailsDisplayed() {
        await expect(await this.page.locator(this.allGradesDetails)).toBeVisible();
    }

    async isEntriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenuDisplayed() {
        await expect(await this.page.locator(this.entriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu)).toBeVisible();
    }

    
    async is50EntriesOptionDisplayed() {
        const entriesContent = await this.page.locator(this.entriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu).textContent();
        await expect(entriesContent.includes('50')).toBeTruthy();
    }

    async is100EntriesOptionDisplayed() {
        const entriesContent = await this.page.locator(this.entriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu).textContent();
        await expect(entriesContent.includes('100')).toBeTruthy();    }

    async is200EntriesOptionDisplayed() {
        const entriesContent = await this.page.locator(this.entriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu).textContent();
        await expect(entriesContent.includes('200')).toBeTruthy();    }

    async is500EntriesOptionDisplayed() {
        const entriesContent = await this.page.locator(this.entriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu).textContent();
        await expect(entriesContent.includes('500')).toBeTruthy();    }

    async areAllEntriesOptionDisplayed() {
        const entriesContent = await this.page.locator(this.entriesDropDownMenuOfAllGradesChoiceOfGradesOfCentralMenu).textContent();
        await expect(entriesContent.includes('Όλες')).toBeTruthy();    }

    async areAllEntriesDisplayed() {
        const pageText = await this.page.textContent('body');
        expect(pageText.includes('86 από 86 εγγραφές')).toBeTruthy();
    }
}