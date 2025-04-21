/* This is collection of Patient search objects*/
var until = protractor.ExpectedConditions

module.exports = {
    // define all web elements
    ptSeachPageWebElements: {
        ptsearch_field: $('#patient-list-search > input'),
        viewdetails_button: element.all(by.xpath('//*[@id="patient-list-details"]')).get(0)
    },


    enterSearchPt: function(name) {
    /*
    This function will input patient's name.
    @param name:  MANDATORY object
            his is used to write patient's name.
    @return: None
    */
    browser.wait(until.presenceOf(this.ptSeachPageWebElements.ptsearch_field), 30000, '"Search" field in patients page is not present within timeout')
    this.ptSeachPageWebElements.ptsearch_field.sendKeys(name);
    },
    clickonViewDetails: function() {
    /*
    This function will see details of the patient.
    @param name:  MANDATORY object
            This is used to write patient's name.
    @return: None
    */
    browser.wait(until.presenceOf(this.ptSeachPageWebElements.viewdetails_button), 30000,'"View Details" in patients page is not present within timeout')
    this.ptSeachPageWebElements.viewdetails_button.click();
    },
}