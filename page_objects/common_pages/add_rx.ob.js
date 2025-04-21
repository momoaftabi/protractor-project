/* This is collection of Adding prescription objects*/
var until = protractor.ExpectedConditions

module.exports = {
    // define all web elements
    addRxPageWebElements: {
        addRx_button: element(by.id('patient-details-add-rx'))
    },

    clickonAddRx: function() {
        /*
        This function will click on the + Add Prescription button.
        @return: None
        */
        browser.wait(until.presenceOf(this.addRxPageWebElements.addRx_button), 20000, '"+ Add Prescription" is not present within timeout')
        this.addRxPageWebElements.addRx_button.click();
    },

}