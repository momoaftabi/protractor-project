/*This is the collection of Sign in page objects*/

var until = protractor.ExpectedConditions

module.exports= {
    // define all web elements
    signInPageWebElements: {
        username: element(by.name('username')),
        userdomain: element(by.name('userDomain')),
        password: element(by.name('password')),
        type_medical: element.all(by.className('btn btn-outline-secondary')).get(0),
        type_dental: element.all(by.className('btn btn-outline-secondary')).get(1),
        signin_button: element(by.buttonText("Doctor's Sign In")),
    },
    clickSignIn: function () {
        /*
        This function will click the sign in button in the login page.
        @return: None
        */
        browser.wait(until.presenceOf(this.signInPageWebElements.signin_button),10000,'"Sign in button" in "Sign in" page is not present within timeout')
        this.signInPageWebElements.signin_button.click();
    },
    enterUserName: function (userName) {
        /*
        This function will input user name in sign in page.

        @param userName:  MANDATORY object
                User name
        @return: None
        */
        browser.wait(until.presenceOf(this.signInPageWebElements.username),10000,'"" field in "Sign in" page is not present within timeout')
        this.signInPageWebElements.username.sendKeys(userName)

    },
    typeMedical: function () {
        /*
        This function will select doctor type in sign in page.
        @return: None
        */

        browser.wait(until.presenceOf(this.signInPageWebElements.type_medical),10000,'"medical" field in "Sign in" page is not present within timeout')
        this.signInPageWebElements.type_medical.click()

    },
    typeDental: function () {
        /*
        This function will select doctor type in sign in page.
        @return: None
        */

        browser.wait(until.presenceOf(this.signInPageWebElements.type_dental),10000,'"dental" field in "Sign in" page is not present within timeout')
        this.signInPageWebElements.type_dental.click()

    },
    enterPassword: function (passwd) {
        /*
        This function will input password in sign in page.

        @param passwd:  MANDATORY object
                User Password
        @return: None
        */
        browser.wait(until.presenceOf(this.signInPageWebElements.password),10000,'"Password" field in "Sign in" page is not present within timeout')
        this.signInPageWebElements.password.sendKeys(passwd)

    }
}