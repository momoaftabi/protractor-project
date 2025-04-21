/* This is collection of logout page objects*/

var until = protractor.ExpectedConditions

module.exports = {
    // define all web elements
    logOutPageWebElements: {
        org_profile_name: element(by.id('navbar-user-dropdown')),
        log_outBTN: element(by.id('logout')),
        doc_profile_name: element(by.id('user-profile-dropdown'))
    },

    clickOnOrgProfileName: function() {
        /**
         * This function will click on org profile name
         * @return: None
         */
        browser.wait(until.presenceOf(this.logOutPageWebElements.org_profile_name), 20000, "Profile name not found within timeout")
        this.logOutPageWebElements.org_profile_name.click()
    },

    clickOnDocProfileName: function() {
        /**
         * This function will click on doctor profile name
         * @return: None
         */
        browser.wait(until.presenceOf(this.logOutPageWebElements.doc_profile_name), 20000, "Profile name not found within timeout")
        this.logOutPageWebElements.doc_profile_name.click()
    },

    clickOnLogOutBTN: function() {
        browser.wait(until.presenceOf(this.logOutPageWebElements.log_outBTN), 20000, "Profile name not found within timeout")
        this.logOutPageWebElements.log_outBTN.click()
        browser.sleep(3000)
    }
}