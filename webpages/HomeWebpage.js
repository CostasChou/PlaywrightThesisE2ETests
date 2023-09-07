const { expect } = require("@playwright/test");

exports.HomeWebpage = 
class HomeWebpage{

    //Locators
    constructor(page){
        this.page = page ; 
        this.dropDownMenuOfAm = '.user-profile.dropdown-toggle'; //class 
        this.profileChoiceOfDropDownMenuOfAm = '.ic.ic-roles.pull-right'; //class
        this.userManualChoiceOfDropDownMenuOfAm = '.fa.fa-file-pdf-o.pull-right'; //class
        this.logOutChoiceOfDropDownMenuOfAm = '.fa.fa-sign-out.pull-right'; //class
        this.languageDropDownMenu = '//body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/nav[1]/ul[1]/li[2]/a[1]'; //Rel Xpath
        this.greekChoiceOfLanguageDropDownMenu = '#elLocale';  //id
        this.englishChoiceOfLanguageDropDownMenu = '#enLocale'; //id
        this.userManualGuideOfCenralMenu = '//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/ul[1]/div[1]/li[13]/a[1]'; //rel Xpath
        this.studentDataChoiceOFCentralMenu = '.ic.ic-student'; //class
        this.thesisChoiceOfCentralMenu = '.ic.ic-work-experience'; //class
        this.gradesChoiceOfCentralMenu = '.ic.ic-grades-alt3'; //class
        this.myBoardChoiceOfGradesOfCentralMenu = '.ic-md.ic-grades'; //class
        this.allGradesChoiceOfGradesCentralMenu = '.ic-md.ic-grades-alt2'; //class
        this.byExamPeriodChoiceOfGradesOfCentralMenu = '.ic-md.ic-terms'; //class
        this.examsChoiceOfCentralMenu = '.ic.ic-grades-alt1'; //class
        this.myExamsChoiceOfExamsOfCentralMenu = '.ic-md.ic-grades-alt1'; //class
        this.examsCalendarChoiceOfExamsOfCentralMenu = '//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/ul[1]/div[1]/li[7]/ul[1]/li[2]'; //rel Xpath
        this.centralMenuCollapseAndExtendButton = '#menu_toggle'; //id
        this.centralMenuLogOutButton = "a[data-toggle='tooltip']"; //cssSelector


    }

    //Retrieve locator's refferences
    async getdropDownMenuOfAM(){
        return this.page.locator(this.dropDownMenuOfAM);
    }

    async getProfileChoiceOfDropDownMenuOfAm(){
        return this.page.locator(this.profileChoiceOfDropDownMenuOfAm);
    }

    async getUserManualChoiceOfDropDownMenuOfAm(){
        return this.page.locator(this.userManualChoiceOfDropDownMenuOfAm);
    }

    async getLogOutChoiceOfDropDownMenuOfAm(){
        return this.page.locator(this.logOutChoiceOfDropDownMenuOfAm);
    }

    async getLanguageDropDownMenu(){
        return this.page.locator(this.languageDropDownMenu);
    }
    async getGreekChoiceOfLanguageDropDownMenu(){
        return this.page.locator(this.greekChoiceOfLanguageDropDownMenu);
    }
    async getEnglishChoiceOfLanguageDropDownMenu(){
        return this.page.locator(this.englishChoiceOfLanguageDropDownMenu);
    }

    async getUserManualGuideOfCentralMenu(){
        return this.page.locator(this.userManualGuideOfCenralMenu);
    }

    async getStudentDataChoiceOfCentralMenu(){
        return this.page.locator(this.studentDataChoiceOFCentralMenu);
    }

    async getGradesChoiceOfCentralMenu(){
        return this.page.locator(this.gradesChoiceOfCentralMenu);
    }

    async getMyBoardChoiceOfGradesOfCentralMenu(){
        return this.page.locator(this.myBoardChoiceOfGradesOfCentralMenu);
    }

    async getAllGradesChoiceOfGradesOfCentralMenu(){
        return this.page.locator(this.allGradesChoiceOfGradesCentralMenu);
    }

    async getByExamsChoiceOfGradesOfCentralMenu(){
        return this.page.locator(this.byExamPeriodChoiceOfGradesOfCentralMenu);
    }

    async getExamsChoiceOfCentralMenu(){
        return this.page.locator(this.examsChoiceOfCentralMenu);
    }

    async getMyExamsChoiceOfExamsOfCentralMenu(){
        return this.page.locator(this.myExamsChoiceOfExamsOfCentralMenu);
    }

    async getExamsCalendarChoiceOfExamsOfCentralMenu(){
        return this.page.locator(this.examsCalendarChoiceOfExamsOfCentralMenu);
    }

    async getCentralMenuCollapseAndExtendButton(){
        return this.page.locator(this.centralMenuCollapseAndExtendButton);
    }
    
    getCentralMenuLogOutButton(){
        return this.page.locator(this.centralMenuLogOutButton);
    }
    
    //Actions
    async clickDropDownMenuOfAm(){
        await this.page.locator(this.dropDownMenuOfAm).click();
    }

    async clickLogOutChoiceOfDropDowNMenuOfAm(){
        await this.page.locator(this.logOutChoiceOfDropDownMenuOfAm).click();
    }

    async clickLanguageDropDownMenu(){
        await this.page.locator(this.languageDropDownMenu).click();
    }
    async clickEnglishChoiceOfLanguageDropDownMenu(){
        await this.page.locator(this.englishChoiceOfLanguageDropDownMenu).click();
    }
    async scrollToUserManualGuideOfCentralMenu() {
        const elementHandle = await this.page.locator(this.userManualGuideOfCenralMenu).first();
        await elementHandle.scrollIntoViewIfNeeded(); // Use scrollIntoViewIfNeeded to scroll into view
      }
    async clickUserManualGuideOfCentralMenu() {
        await this.page.locator(this.userManualGuideOfCenralMenu).click();
      }
      async clickStudentDataOfCentralMenu(){
        await this.page.locator(this.studentDataChoiceOFCentralMenu).click();
    }

    async clickThesisChoiceOfCentraMenu(){
        await this.page.locator(this.thesisChoiceOfCentralMenu).click();
    }
    async clickGradesChoiceOfCentralMenu(){
        await this.page.locator(this.gradesChoiceOfCentralMenu).click();
    }

    async clickMyBoardChoiceOfGradesOfCentralMenu(){
        await this.page.locator(this.myBoardChoiceOfGradesOfCentralMenu).click();
    }

    async clickAllGradesChoiceOfGradesOfCentralMenu(){
        await this.page.locator(this.allGradesChoiceOfGradesCentralMenu).click();
    }

    async clickByExamPeriodChoiceOfGradesOfCentralMenu(){
        await this.page.locator(this.byExamPeriodChoiceOfGradesOfCentralMenu).click();
    }

    async clickExamsChoiceOfCentralMenu(){
        await this.page.locator(this.examsChoiceOfCentralMenu).click();
    }
    async clickMyExamsChoiceOfExamsOfCentralMenu(){
        await this.page.locator(this.myExamsChoiceOfExamsOfCentralMenu).click();
    }
    async clickExamsCalendarChoiceOFExamsOfCentralMenu(){
        await this.page.locator(this.examsCalendarChoiceOfExamsOfCentralMenu).click();
    }

    async clickCentralMenuCollapseAndExtendButton(){
        await this.page.locator(this.centralMenuCollapseAndExtendButton).click();
    }


    //Assertions
    async assertUserManualGuideIsOpened() {
        await this.page.waitForTimeout(5000);
        // Get the count of open tabs
        const tabsCount = (await this.page.context().pages()).length;
    
        // Verify that a new tab was opened
        expect(tabsCount).toBeGreaterThan(1);
    }
    
    async isGradesChoiceOfCentralMenuDisplayed() {
        await expect(await this.page.locator(this.gradesChoiceOfCentralMenu)).toBeVisible();
    }

    async isMyBoardChoiceOfGradesOfCentralMenuDisplayed() {
        await expect(await this.page.locator(this.myBoardChoiceOfGradesOfCentralMenu)).toBeVisible();
    }

    async isAllGradesChoiceOfGradesOfCentralMenuDisplayed() {
        await expect(await this.page.locator(this.allGradesChoiceOfGradesCentralMenu)).toBeVisible();
    }

    async isByExamsPeriodChoiceOfGradesOfCentralMenuDisplayed() {
        await expect(await this.page.locator(this.byExamPeriodChoiceOfGradesOfCentralMenu)).toBeVisible();
    }
    async isExamsOfCentralMenuDisplayed() {
        await expect(await this.page.locator(this.examsChoiceOfCentralMenu)).toBeVisible();
    }
    async isMyExamsOfExamsOfCentralMenuDisplayed() {
        await expect(await this.page.locator(this.myExamsChoiceOfExamsOfCentralMenu)).toBeVisible();
    }
    async isExamsCalendarOfExamsOfCentralMenuDisplayed() {
        await expect(await this.page.locator(this.examsCalendarChoiceOfExamsOfCentralMenu)).toBeVisible();
    }

    async isLogOutButtonVisible() {  
        await expect(await this.page.locator(this.centralMenuLogOutButton)).toBeVisible();
    }
}