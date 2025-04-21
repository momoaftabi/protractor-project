/*This is the collection of Sign in page objects*/

var until = protractor.ExpectedConditions

module.exports = {
    // define all web elements
    signInPageWebElements: {
        username: element(by.name('username')),
        userdomain: element(by.name('userDomain')),
        password: element(by.name('password')),
        signin_button: element(by.buttonText("Doctor's Sign In")),
        sign_inBTN: element(by.buttonText('Sign In'))
    },
    clickOrgSigninBTN: function() {
        /*
        This function will click on the "Sign in" button
        @return: None
        */
        browser.wait(until.presenceOf(this.signInPageWebElements.sign_inBTN), 20000, "Signin button not found within timeout")
        this.signInPageWebElements.sign_inBTN.click()
    },
    clickSignIn: function() {
        /*
        This function will click the sign in button in the login page.
        @return: None
        */
        browser.wait(until.presenceOf(this.signInPageWebElements.signin_button), 10000, '"Sign in button" in "Sign in" page is not present within timeout')
        this.signInPageWebElements.signin_button.click();
    },
    enterUserName: function(userName) {
        /*
        This function will input user name in sign in page.

        @param userName:  MANDATORY object
                User name
        @return: None
        */
        browser.wait(until.presenceOf(this.signInPageWebElements.username), 10000, '"Email address" field in "Sign in" page is not present within timeout')
        this.signInPageWebElements.username.sendKeys(userName)
    },
    enterUserDomain: function(userdOmain) {
        /*
        This function will enter sqh user domain name.
        @userDomain:  MANDATORY object
                This is used  to enter sqh user domain name (sqh/root).
        @return: None
        */
        browser.wait(until.presenceOf(this.signInPageWebElements.userdomain), 10000, '"Domain Name" field in "Sign in" page is not present within timeout')
        this.signInPageWebElements.userdomain.clear()
        this.signInPageWebElements.userdomain.sendKeys(userdOmain)
    },
    enterPassword: function(passwd) {
        /*
        This function will input password in sign in page.

        @param passwd:  MANDATORY object
                User Password
        @return: None
        */
        browser.wait(until.presenceOf(this.signInPageWebElements.password), 10000, '"Password" field in "Sign in" page is not present within timeout')
        this.signInPageWebElements.password.sendKeys(passwd)
    }
}