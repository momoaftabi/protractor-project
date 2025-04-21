/*  This is the collection of add user page objects */

var until = protractor.ExpectedConditions;
module.exports = {
    userCreateElements: {
        // Define all web elements
        userAccountBTN: element(by.css('a[href="/employee/list?organizationId=1"]')),
        addNewBTN: element(by.css('a[href="/employee/enrollment?organizationId=1&backLink=/employee/list?organizationId%3D1"]')),
        usernameFLD: element(by.id("employee.user.userName")),
        passwordFLD: element(by.id("plainPassword")),
        confirmPasswordFLD: element(by.id("confirmPassword")),
        fullNameFLD: element(by.id("employee.user.name")),
        designationFLD: element(by.id("employee.designation")),
        dateOfBirthFLD: element(by.id("employee.user.dateOfBirth")),
        genderFLD: element(by.id("employee.user.gender2")),
        emailFLD: element(by.id("employee.user.email")),
        phoneNoFLD: element(by.id("employee.user.phoneNumber")),
        presentAddressFLD: element(by.id("employee.user.presentAddress.address")),
        permanentAddressFLD: element(by.id("employee.user.permanentAddress.address")),
        rolesFLD: element.all(by.css('input[id*="assignedRoles"]')),
        saveBTN: element(by.name("_action_submit")),
    },
    clickUserAccBTN: function() {
        /**
         * This function will click on the "User Account" button to redirect to the "Employee list" page
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.userAccountBTN),
            30000, "User account button not found within timeout");
        browser.sleep(500);
        this.userCreateElements.userAccountBTN.click();
    },
    clickAddNewBTN: function() {
        /**
         * This function will click on the "Add New" button to redirect to the "New Employee Enrollment" page
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.addNewBTN),
            30000, "Add new button not found within timeout");
        browser.sleep(500);
        this.userCreateElements.addNewBTN.click();
    },
    inputUserName: function(new_userName) {
        /**
         * This function will input user name in the "Username" field
         * @param new_userName: MANDATORY object
         *          This is used to enter user name
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.usernameFLD),
            30000, "Username field not found within timeout");
        browser.sleep(500);
        this.userCreateElements.usernameFLD.sendKeys(new_userName);
    },
    inputPass: function(new_Password) {
        /**
         * This function will input password in the "Password" and "Confirm Password" fields
         * @param new_Password: MANDATORY object
         *          This is used to enter password
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.passwordFLD),
            30000, "Password field not found within timeout");
        this.userCreateElements.passwordFLD.sendKeys(new_Password);
        browser.wait(until.presenceOf(this.userCreateElements.confirmPasswordFLD),
            30000, "Confirm password field not found within timeout");
        this.userCreateElements.confirmPasswordFLD.sendKeys(new_Password);
    },
    inputFullName: function(new_fullName) {
        /**
         * This function will input name in the "Full Name" field
         * @param new_fullName: MANDATORY object
         *          This is used to enter name
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.fullNameFLD),
            30000, "Full name field not found within timeout");
        this.userCreateElements.fullNameFLD.sendKeys(new_fullName)
    },
    inputDesignation: function(new_designation) {
        /**
         * This function will input designation in the "Designation" field
         * @param new_designation: MANDATORY object
         *          This is used to enter designation
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.designationFLD),
            30000, "Designation field not found within timeout");
        this.userCreateElements.designationFLD.sendKeys(new_designation);
    },
    inputDateOfBirth: function(new_dateOfBirth) {
        /**
         * This function will input date of birth in the "Date of Birth" field
         * @param new_dateOfBirth: MANDATORY object
         *          This is used to enter date of birth
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.dateOfBirthFLD),
            30000, "Date of birth field not found within timeout");
        this.userCreateElements.dateOfBirthFLD.sendKeys(new_dateOfBirth)
    },
    selectGender: function() {
        /**
         * This function will select the gender from the "Gender" field
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.genderFLD),
            30000, "Gender field not found within timeout");
        this.userCreateElements.genderFLD.click();
    },
    inputEmail: function(new_email) {
        /**
         * This function will input email address in the "Email Address" field
         * @param new_email: MANDATORY object
         *          This is used to enter email address
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.emailFLD),
            30000, "Email field not found within timeout");
        this.userCreateElements.emailFLD.sendKeys(new_email)
    },
    inputPhoneNumber: function(new_phoneNumber) {
        /**
         * This function will input phone number in the "Phone Number" field
         * @param new_phoneNumber: MANDATORY object
         *          This is used to enter phone number
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.phoneNoFLD),
            30000, "Phone number field not found within timeout");
        this.userCreateElements.phoneNoFLD.sendKeys(new_phoneNumber);
    },
    inputPresentAddress: function(new_presentAddress) {
        /**
         * This function will input present address in the "Present Address" field
         * @param new_presentAddress: MANDATORY object
         *          This is used to enter present address
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.presentAddressFLD),
            30000, "Present address field not found within timeout");
        this.userCreateElements.presentAddressFLD.sendKeys(new_presentAddress);
    },
    inputPermanentAddress: function(new_permanentAddress) {
        /**
         * This function will input permanent address in the "Permanent Address" field
         * @param new_permanentAddress: MANDATORY object
         *          This is used to enter permanent address
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.permanentAddressFLD),30000, "Permanent address field not found within timeout");
        this.userCreateElements.permanentAddressFLD.sendKeys(new_permanentAddress);
    },
    selectRoles: function() {
        /**
         * This function will select all the roles from the "User Role" field
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.rolesFLD),
            30000, "User role not found within timeout");
        this.userCreateElements.rolesFLD.click();
    },
    clickSaveFormDataBTN: function() {
        /**
         * This function will click on the "Save Form Data" button to create a new system user
         * @return: None
         */
        browser.wait(until.presenceOf(this.userCreateElements.saveBTN),
            30000, "Save form data button not found within timeout");
        this.userCreateElements.saveBTN.click();
        browser.sleep(900);
    }
}