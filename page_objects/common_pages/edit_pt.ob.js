/* This is collection of Edit Prescription objects*/
var until = protractor.ExpectedConditions

module.exports = {
    // define all web elements
    editPtPageWebElements: {
        edit_profile: element(by.id('rx-history-edit-profile')),
        edited_ptname: element(by.id('patient-form-name')),
        edited_ptaddress: element(by.id('patient-form-address')),
        add_rx:  element(by.id('patient-details-add-rx')),
    },
    clickonEditProfile: function() {
        /*
        This function will click on edit patient details.
        @return: None
        */
        browser.wait(until.presenceOf(this.editPtPageWebElements.edit_profile), 20000, '"New Patient +" in Dashboard is not present within timeout')
        this.editPtPageWebElements.edit_profile.click();
    },

    enterEditedName: function(editedname) {
        /*
        This function will edit patient details.
        @param editedname:  MANDATORY object
                This is used to edit patient's name.
        @return: None
        */
        browser.sleep(500)
        browser.wait(until.presenceOf(this.editPtPageWebElements.edited_ptname), 10000, '"Patient Name" field is not present within timeout')
        this.editPtPageWebElements.edited_ptname.clear().sendKeys(editedname);

    },

    enterEditedAddress: function (editedaddress) {
        /*
        This function will edit patient details.
        @param editedaddress:  MANDATORY object
                This is used to edit patient's address.
        @return: None
        */
        browser.wait(until.presenceOf(this.editPtPageWebElements.edited_ptaddress), 10000, '"Patient Address" field is not present within timeout')
        this.editPtPageWebElements.edited_ptaddress.sendKeys(editedaddress);
        browser.sleep(5000)

    },

}