const { expect } = require("@playwright/test");

exports.ExamsWebpage = class ExamsWebpage {
    //Locators
    constructor(page){
        this.page = page;
        this.syllabusYearDropDownMenu = '#studentCourseSyllabusExamSyllabus';
        this.monthAndYearLabel = '.k-lg-date-format';
    }

     // Retrieve Locators
    getSyllabusYearDropDownMenu() {
        return this.page.locator(this.syllabusYearDropDownMenu);
    }

    getMonthAndYearLabel() {
        return this.page.locator(this.monthAndYearLabel);
    }
    
    // Actions
    async clickSyllabusYearDropDownMenu() {
        await this.page.locator(this.syllabusYearDropDownMenu).click();
    }

    //2018-2019
    async select2018_2019AcademicYearInSyllabusDropDownMenu() {
        await this.page.locator(this.syllabusYearDropDownMenu).selectOption({ index: 2 })
    }


    // Assertions
    async isSyllabusYearDropDownMenuDisplayed() {
        await expect(await this.page.locator(this.syllabusYearDropDownMenu)).toBeVisible();
    }

    async doesMonthAndYearLabelHasTheCorrespondingValue() {
        await expect(await this.page.locator(this.monthAndYearLabel)).toContainText("Σεπτέμβριος 2018");
    }
    
}