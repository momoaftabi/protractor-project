/* This is collection of Patient page objects*/
var until = protractor.ExpectedConditions

module.exports = {
    // define all web elements
    ptSelectPageWebElements: {
        newptselect_button: element(by.id('patient-nav-link'))
    },


    clickonPt: function() {
    /*
    This function will click on the Patients button from Nav-Bar.
    @return: None
    */
    browser.wait(until.presenceOf(this.ptSelectPageWebElements.newptselect_button), 30000, '"Patient" in Nav-Bar is not present within timeout')
    this.ptSelectPageWebElements.newptselect_button.click();
    },

}