/* This is collection of New Patient page objects*/
var until = protractor.ExpectedConditions

module.exports = {
    // define all web elements
    newptSelectPageWebElements: {
        newptselect_button: element(by.id('new-patient-nav-link'))
    },


    clickonNewPt: function() {
        /*
        This function will click on the New Patients + button from Nav-Bar.
        @return: None
        */
        browser.wait(until.presenceOf(this.newptSelectPageWebElements.newptselect_button), 20000, '"New Patient +"  is not present within timeout')
        this.newptSelectPageWebElements.newptselect_button.click();
    },

}