/* This is collection of patient creation objects*/
var until = protractor.ExpectedConditions

module.exports = {
    // define all web elements
    newPtPageWebElements: {
        pt_name: element(by.id('patient-form-name')),
        pt_phn: $('#patient-form-phone input'),
        pt_age: element(by.name('year')),
        pt_gender: element(by.name('gender')),
        gender_select: $$('#patient-form-gender div .ui-dropdown-items-wrapper ul li'),
        pt_bg: element(by.name('bloodGroup')),
        bg_select: $$('#patient-form-blood-group div .ui-dropdown-items-wrapper ul li'),
        pt_demo: element(by.name('demography')),
        demo_select: $$('#patient-form-demography div .ui-dropdown-items-wrapper ul li'),
        pt_occupation: element(by.name('occupation')),
        occupation_select: $$('#patient-form-occupation div .ui-dropdown-items-wrapper ul li').get(1),
        pt_email: element(by.id('patient-form-email')),
        pt_father: element(by.id('patient-form-father-name')),
        pt_mother: element(by.id('patient-form-mother-name')),
        pt_spouse: element(by.id('patient-form-spouse-name')),
        pt_address: element(by.id('patient-form-address')),
        savept_button:element(by.id('patient-form-save')),
    },

    enterName: function (Name) {
        /*
        This function will enter patient's name.
        @Name:  MANDATORY object
                This is used  to enter patient's name.
         @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_name), 10000, '"Patient Name" field is not present within timeout')
        this.newPtPageWebElements.pt_name.sendKeys(Name);
    },
    enterPhn: function (Phn) {
        /*
        This function will enter patient's phone number.
        @Phn:  MANDATORY object
                This is used  to enter patient's phone number.
         @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_phn), 10000, '"Patient Phone No" field is not present within timeout')
        this.newPtPageWebElements.pt_phn.sendKeys(Phn);
    },
    enterAge: function (Age) {
        /*
        This function will enter patient's age.
        @Age:  MANDATORY object
                This is used  to enter patient's age.
         @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_age), 10000, '"Patient age" field is not present within timeout')
        this.newPtPageWebElements.pt_age.sendKeys(Age);
    },
    clickonGender: function (gender) {
        /*
        This function will enter patient's gender.
         @param gender:  MANDATORY object
                This is used to write patient's gender.
        @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_gender), 10000, '"Patient gender" field is not present within timeout')
        this.newPtPageWebElements.pt_gender.click();

        if (gender == "Male"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.gender_select), 10000, '"Male" is not present within timeout')
            this.newPtPageWebElements.gender_select.get(1).click();}
        else if (gender == "Female"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.gender_select), 10000, '"Female" is not present within timeout')
            this.newPtPageWebElements.gender_select.get(2).click();}
        else if (gender == "Other"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.gender_select), 10000, '"Other" is not present within timeout')
            this.newPtPageWebElements.gender_select.get(3).click();}
        else if (gender == "Unknown"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.gender_select), 10000, '"Unknown" is not present within timeout')
            this.newPtPageWebElements.gender_select.get(4).click();}
    },
    clickonBg: function (bloodGroup) {
        /*
        This function will enter patient's bloodGroup.
        @param bloodGroup:  MANDATORY object
                This is used to write patient's bloodGroup.
        @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_bg), 10000, '"Patient bloodGroup" field is not present within timeout')
        this.newPtPageWebElements.pt_bg.click();

        if (bloodGroup == "O+ve"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.bg_select), 10000, '"O+ve" is not present within timeout')
            this.newPtPageWebElements.bg_select.get(7).click();}
        else if (bloodGroup == "O-ve"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.bg_select), 10000, '"O-ve" is not present within timeout')
            this.newPtPageWebElements.bg_select.get(8).click();}
        else if (bloodGroup == "A+ve"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.bg_select), 10000, '"A+ve" is not present within timeout')
            this.newPtPageWebElements.bg_select.get(1).click();}
        else if (bloodGroup == "A-ve"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.bg_select), 10000, '"A-ve" is not present within timeout')
            this.newPtPageWebElements.bg_select.get(2).click();}
        else if (bloodGroup == "B+ve"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.bg_select), 10000, '"B+ve" is not present within timeout')
            this.newPtPageWebElements.bg_select.get(3).click();}
        else if (bloodGroup == "B-ve"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.bg_select), 10000, '"B-ve" is not present within timeout')
            this.newPtPageWebElements.bg_select.get(4).click();}
        else if (bloodGroup == "AB+ve"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.bg_select), 10000, '"AB+ve" is not present within timeout')
            this.newPtPageWebElements.bg_select.get(5).click();}
        else if (bloodGroup == "AB-ve"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.bg_select), 10000, '"AB-ve" is not present within timeout')
            this.newPtPageWebElements.bg_select.get(6).click();}
    },
    clickonDemo: function (demography) {
        /*
        This function will enter patient's demography.
        @param demography:  MANDATORY object
                This is used to write patient's demography.
        @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_demo), 10000, '"Patient demography" field is not present within timeout')
        this.newPtPageWebElements.pt_demo.click();

        if (demography == "Urban"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.demo_select), 10000, '"Urban" is not present within timeout')
            this.newPtPageWebElements.demo_select.get(1).click();}
        else if (demography == "Semi Urban"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.demo_select), 10000, '"Semi Urban" is not present within timeout')
            this.newPtPageWebElements.demo_select.get(2).click();}
        else if (demography == "Rural"){
            browser.wait(until.presenceOf(this.newPtPageWebElements.demo_select), 10000, '"Rural" is not present within timeout')
            this.newPtPageWebElements.demo_select.get(3).click();}
    },
    clickonOccupation: function () {
        /*
        This function will select patient's occupation.
        @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_occupation), 10000, '"Patient occupation" field is not present within timeout')
        this.newPtPageWebElements.pt_occupation.click();
        browser.wait(until.presenceOf(this.newPtPageWebElements.occupation_select), 10000, '"Patient occupation" field is not present within timeout')
        this.newPtPageWebElements.occupation_select.click();

    },
    enterEmail: function (Email) {
        /*
        This function will enter patient's email.
        @param Email:  MANDATORY object
                This is used to write patient's email.
         @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_email), 10000, '"Patient Email" field is not present within timeout')
        this.newPtPageWebElements.pt_email.sendKeys(Email);
    },
    enterFatherName: function (FatherName) {
        /*
        This function will enter patient's father's name.
        @param FatherName:  MANDATORY object
                This is used to write patient's father's name.
         @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_father), 10000, '"father name" field is not present within timeout')
        this.newPtPageWebElements.pt_father.sendKeys(FatherName);
    },
    enterMotherName: function (MotherName) {
        /*
        This function will enter patient's mother's name.
        @param MotherName:  MANDATORY object
                This is used to write patient's mother's name.
         @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_mother), 10000, '"Mother Name" field is not present within timeout')
        this.newPtPageWebElements.pt_mother.sendKeys(MotherName);
    },
    enterSpouseName: function (SpouseName) {
        /*
        This function will enter patient's spouse's name.
       @param SpouseName:  MANDATORY object
                This is used to write patient's spouse's name.
         @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_spouse), 10000, '"Spouse Name" field is not present within timeout')
        this.newPtPageWebElements.pt_spouse.sendKeys(SpouseName);
    },
    enterAddress: function (Address) {
        /*
        This function will enter patient's address.
        @param Address:  MANDATORY object
                This is used to write patient's address.
         @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.pt_address), 10000, '"Address" field is not present within timeout')
        this.newPtPageWebElements.pt_address.sendKeys(Address);
    },
    clickonSavePt: function () {
        /*
        This function will click on the Save button which will register the patient.
        @return: None
        */
        browser.wait(until.presenceOf(this.newPtPageWebElements.savept_button), 10000, '"Save" is not present within timeout')
        this.newPtPageWebElements.savept_button.click();
    },
}