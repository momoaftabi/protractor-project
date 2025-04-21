/* This is the collection of Appointment page objects */

var until = protractor.ExpectedConditions

module.exports = {
    appointmentPageWebElements: {
        //Define all web elements
        appointmentBTN: element(by.id('appointment-nav-link')),
        pendingAddBTN: element(by.id("add-appointment-btn")),
        slot: $('#slot-list a:not(.appointment-slot-booked):nth-child(1)'),
        patientSearch: element(by.id('apt-patientSearch')),
        phone_number: element(by.id('apt-phonenumber')),
        patient_list: element(by.xpath('//span/div/ul/li[1]')),
        name: element(by.id('apt-name')),
        age: element(by.id('apt-age-year')),
        blood_group: element(by.xpath('//div[@id="page-content-wrapper"]/div/div[3]/div/appointment-schedule/appointment-form-dialog/p-dialog[1]/div/div[2]/div/div/form/div[3]/div[1]/div/p-selectbutton/div/div[2]/span')),
        gender: element(by.xpath('//div[@id="page-content-wrapper"]/div/div[3]/div/appointment-schedule/appointment-form-dialog/p-dialog[1]/div/div[2]/div/div/form/div[4]/div[1]/p-selectbutton/div/div[1]')),
        book_appointmentBTN: element(by.id('book-apt-btn')),
        closeBTN: element(by.id('close-apt-diag-btn')),
        orgDropdown: element(by.id('org-selection-dropdown')),
        org: $('.nav-item.dropdown.show div div:nth-of-type(5)'),

        appointment_info_btn : element(by.xpath('(//i[@class="fas fa-id-card-alt"])[1]')), 
        orgname : element(by.className('ml-1')) 
    },

    clickOnAppointmentBTN: function() {
        /**
         * This function will click on the "Appointment" button
         * @return: None
         */
        browser.wait(until.presenceOf(this.appointmentPageWebElements.appointmentBTN), 30000, "Appointment button not found within timeout")
        this.appointmentPageWebElements.appointmentBTN.click()
    },

    clickOnAddBTN: function() {
        /**
         * This function will select a doctor
         * @return: None
         */
    
        browser.wait(until.presenceOf(this.appointmentPageWebElements.pendingAddBTN), 30000, "Add button not found within timeout")
        this.appointmentPageWebElements.pendingAddBTN.click()
    },

    selectSlot: function(){
         /** 
         * This function will select a slot
         * @return: None
         */
          browser.wait(until.presenceOf(this.appointmentPageWebElements.slot), 30000, "Slot not found within timeout")
          this.appointmentPageWebElements.slot.click()
    },
    forSearch: function(phoneNumber){
        /**
         * This function will search a patient
         * @param phoneNumber: Mandatory object
         *            This is used to enter phone number 
         * @return: None
         */
         browser.wait(until.presenceOf(this.appointmentPageWebElements.patientSearch), 20000, "search is not work out")
         this.appointmentPageWebElements.patientSearch.sendKeys(phoneNumber)
    },
    inputPhoneNumber: function(phone_Number) {
        /**
         * This function will input phone number
         * @param phone_Number: MANDATORY object
         *          This is used to enter phone number
         * @return: None
         */
        browser.wait(until.presenceOf(this.appointmentPageWebElements.phone_number), 30000, "Phone number field not found within timeout")
        this.appointmentPageWebElements.phone_number.sendKeys(phone_Number)
    },

    inputName: function(patient_Name) {
        /**
         * This function will input name
         * @param patient_Name: MANDATORY object
         *          This is used to enter name
         * @return: None
         */
        browser.wait(until.presenceOf(this.appointmentPageWebElements.name), 30000, "Name field not found within timeout")
        this.appointmentPageWebElements.name.click()
        this.appointmentPageWebElements.name.sendKeys(patient_Name)
    },

    inputAge: function(patient_Age) {
        /**
         * This function will input age
         * @param patient_Age: MANDATORY object
         *          This is used to enter age
         * @return: None
         */
        browser.wait(until.presenceOf(this.appointmentPageWebElements.age), 30000, "Age field not found within timeout")
        this.appointmentPageWebElements.age.sendKeys(patient_Age)
    },

    selectBloodGroup: function() {
        /**
         * This function will select blood group
         * @return: None
         */
        browser.wait(until.presenceOf(this.appointmentPageWebElements.blood_group), 30000, "Blood group field not found within timeout")
        this.appointmentPageWebElements.blood_group.click()
    },

    selectGender: function() {
        /**
         * This function will select gender
         * @return: None
         */
        browser.wait(until.presenceOf(this.appointmentPageWebElements.gender), 30000, "Gender field not found within timeout")
        this.appointmentPageWebElements.gender.click()
    },

    selectPatient: function() {
        /**
         * This function will select a doctor
         * @return: None
         */
        browser.wait(until.presenceOf(this.appointmentPageWebElements.patient_list), 30000, "Patient list not found within timeout")
        this.appointmentPageWebElements.patient_list.click()
    },

    clickOnBookAppointmentBTN: function() {
        /**
         * This function will select a doctor
         * @return: None
         */
        browser.wait(until.presenceOf(this.appointmentPageWebElements.book_appointmentBTN), 30000, "Book appointment button not found within timeout")
        this.appointmentPageWebElements.book_appointmentBTN.click()
        browser.sleep(1000)
        browser.wait(until.presenceOf(this.appointmentPageWebElements.closeBTN), 30000, "Close button not found within timeout")
        this.appointmentPageWebElements.closeBTN.click()
    },
    switchOrganization: function() {
        /**
         * This function will change the organization
         * @return: None
         */
        browser.wait(until.elementToBeClickable(this.appointmentPageWebElements.orgDropdown), 30000, "Organization dropdown not found within timeout")
        this.appointmentPageWebElements.orgDropdown.click()
        browser.wait(until.presenceOf(this.appointmentPageWebElements.org), 30000, "Organization not found within timeout")
        this.appointmentPageWebElements.org.click()
    }
}