/* This is the collection of Appointment Configuration page objects */

var until = protractor.ExpectedConditions
var app_config = {
    moreBTN: element(by.id('more-dropdown')),
    appointmentConfigBTN: element(by.id('apt-config-nav-link')),

    // General tab elements
    editBTN: element(by.id('apt-config-edit-btn')),
    designation: element(by.name('designation')),
    timePerPatient: element(by.name('timePerPatient')),
    autoConfirmEnable: $('#auto-confirmation label:not(.active)'),
    requestType: $('#apt-request-type label:not(.active)'),
    waitingList: $('#waiting-list label:not(.active)'),
    waitingListSize: $('form div:nth-child(3) div:nth-of-type(2) div input'),
    availabilityType: $('#apt-availability-type label:not(.active)'),
    phoneNumber: element(by.name('phoneNumber')),
    fee: element(by.name('fee')),
    followupFee: element(by.name('followupFee')),
    reportFee: element(by.name('reportFee')),
    status: $('#apt-status label:not(.active)'),
    videoConsultation: $('#video-consultaion label:not(.active)'),
    updateBTN: element(by.id('apt-config-save-btn')),      
    edit_icon : element(by.id('saturday-edit-schedule0')),
    
    // Doctor schedule tab elements 
    scheduleTab: element(by.id('schedule-tab')),
    addInSaturday: element(by.id('add-schedule-saturday')),
    startTimeSaturday: $('input[name="startTimeStr"]'),
    endTimeSaturday: $('input[name="endTimeStr"]'),
    saveBTN: element(by.id('save-schedule-btn')),
    deleteBTN: element(by.id('saturday-delete-schedule0')),
    confirmDelete: element(by.xpath('(//span[@class="ui-button-text ui-clickable"][normalize-space()="Yes"])[2]')),
    
    //org switch tab element 
    orgDropdown:element(by.id('org-selection-dropdown')),
    org: $('.nav-item.dropdown.show div div:nth-of-type(5)'),
    org_name : element(by.className('ml-1'))
    
}


module.exports = {
    clickOnAppointmentConfigurationBTN: function() {
        /**
         * This function is used to open the appointment configuration page
         * @return: None
         */
        browser.wait(until.presenceOf(app_config.moreBTN), 20000, "More button not found within timeout")
        app_config.moreBTN.click()
        browser.wait(until.presenceOf(app_config.appointmentConfigBTN), 20000, "Appointment configuration button not found within timeout")
        app_config.appointmentConfigBTN.click()
    },

    
    inputInGeneralTabSlot: function(designation, timePerPatient, waitingSize, phoneNumber, fee, followupFee, reportFee) {
        /**
         * This function is used to save configurations for general tab
         * @param designation: MANDATORY object
         *          This is used to enter designation
         * @param timePerPatient: MANDATORY object
         *          This is used to enter time per patient
         * @param waitingSize: MANDATORY object
         *          This is used to enter waiting size 
         * @param phoneNumber: MANDATORY object
         *          This is used to enter phone number
         * @param fee: MANDATORY object
         *          This is used to enter fees
         * @param followupFee: MANDATORY object
         *          This is used to enter follow up fees
         * @param reportFee: MANDATORY object
         *          This is used to enter report fees
         * @return: None
         */


        browser.wait(until.presenceOf(app_config.editBTN), 20000, "Edit button not found within timeout")
        app_config.editBTN.click()
        browser.wait(until.presenceOf(app_config.designation), 20000, "Designation field not found within timeout")
        app_config.designation.clear().sendKeys(designation)
        browser.wait(until.presenceOf(app_config.timePerPatient), 20000, "Time per patient field not found within timeout")
        app_config.timePerPatient.clear().sendKeys(timePerPatient)
        browser.wait(until.presenceOf(app_config.autoConfirmEnable), 20000, "Auto confirmation field not found within timeout")
        app_config.autoConfirmEnable.click()
        browser.wait(until.presenceOf(app_config.requestType), 20000, "Request type field not found within timeout")
        app_config.requestType.click() 
        browser.wait(until.presenceOf(app_config.waitingList), 20000, "Waiting list field not found within timeout")
        app_config.waitingList.getText().then(function(text){
        app_config.waitingList.click()
        // Comparing the text of the button after the click
        if (text == 'Enable')                         
                {
                    browser.wait(until.presenceOf(app_config.waitingListSize), 20000, "Waiting size is not found within timeout")     
                    app_config.waitingListSize.clear().sendKeys(waitingSize)
                }    
    })
        browser.wait(until.presenceOf(app_config.availabilityType), 20000, "Availability Type field not found within timeout")
        app_config.availabilityType.click()
        browser.wait(until.presenceOf(app_config.phoneNumber), 20000, "Phone number field not found within timeout")
        app_config.phoneNumber.clear().sendKeys(phoneNumber)
        browser.wait(until.presenceOf(app_config.fee), 20000, "Fee field not found within timeout")
        app_config.fee.clear().sendKeys(fee)
        browser.wait(until.presenceOf(app_config.followupFee), 20000, "Followup fee field not found within timeout")
        app_config.followupFee.clear().sendKeys(followupFee)
        browser.wait(until.presenceOf(app_config.reportFee), 20000, "Report fee field not found within timeout")
        app_config.reportFee.clear().sendKeys(reportFee)
        browser.wait(until.presenceOf(app_config.status), 20000, "Status field not found within timeout")
        app_config.status.click()
        browser.wait(until.presenceOf(app_config.videoConsultation), 20000, "Video Consultation field not found within timeout")
        app_config.videoConsultation.click()
        browser.wait(until.presenceOf(app_config.updateBTN), 20000, "Update button not found within timeout")
        app_config.updateBTN.click()
    },


    inputInScheduleTab: function(startTimeSaturday, endTimeSaturday) {
        /**
         * This function is used to add doctor schedule
         * @param startTimeSaturday: MANDATORY object
         *          This is used to add Saturday start time
         * @param endTimeSaturday: MANDATORY object
         *          This is used to enter Saturday end time
         * @return: None
         */
        browser.wait(until.presenceOf(app_config.scheduleTab), 20000, "Doctor schedule tab not found within timeout")
        app_config.scheduleTab.click()
        browser.wait(until.presenceOf(app_config.addInSaturday), 20000, "Add button not found within timeout")
        app_config.addInSaturday.click()
        browser.wait(until.presenceOf(app_config.endTimeSaturday), 20000, "End time field not found within timeout")
        app_config.endTimeSaturday.click().sendKeys(endTimeSaturday)
        browser.wait(until.presenceOf(app_config.startTimeSaturday), 20000, "Start time field not found within timeout")
        app_config.startTimeSaturday.click().sendKeys(startTimeSaturday)
        browser.wait(until.presenceOf(app_config.saveBTN), 20000, "Save button not found within timeout")
        app_config.saveBTN.click()
        browser.wait(until.presenceOf(app_config.deleteBTN),20000, "Delete button is not found within timeout")
        app_config.deleteBTN.click();
        browser.wait(until.presenceOf(app_config.confirmDelete),20000, "Delete is not occured")
        app_config.confirmDelete.click();      
    },
    

    switchOrg: function(){
        /**
         * This function will change the organization
         * @return: None
         */
         browser.wait(until.presenceOf(app_config.orgDropdown), 30000, "Organization dropdown not found within timeout")
         app_config.orgDropdown.click()
         browser.wait(until.presenceOf(app_config.org), 30000, "Organization not found within timeout")
         app_config.org.click()
    },
    

    inputInGeneralTabSerial: function(designation, timePerPatient, waitingSize, phoneNumber, fee, followupFee, reportFee) {
         /**
         * This function is used to save configurations for general tab
         * @param designation: MANDATORY object
         *          This is used to enter designation
         * @param timePerPatient: MANDATORY object
         *          This is used to enter time per patient
         * @param waitingSize: MANDATORY object
         *          This is used to enter waiting size 
         * @param phoneNumber: MANDATORY object
         *          This is used to enter phone number
         * @param fee: MANDATORY object
         *          This is used to enter fees
         * @param followupFee: MANDATORY object
         *          This is used to enter follow up fees
         * @param reportFee: MANDATORY object
         *          This is used to enter report fees
         * @return: None
         */
          
          browser.wait(until.presenceOf(app_config.editBTN), 20000, "Edit button not found within timeout")
          app_config.editBTN.click()
          browser.wait(until.presenceOf(app_config.designation), 20000, "Designation field not found within timeout")
          app_config.designation.clear().sendKeys(designation)
          browser.wait(until.presenceOf(app_config.timePerPatient), 20000, "Time per patient field not found within timeout")
          app_config.timePerPatient.clear().sendKeys(timePerPatient)
          browser.wait(until.presenceOf(app_config.autoConfirmEnable), 20000, "Auto confirmation field not found within timeout")
          app_config.autoConfirmEnable.click()
          browser.wait(until.presenceOf(app_config.requestType), 20000, "Request type field not found within timeout")
          app_config.requestType.click()
          browser.wait(until.presenceOf(app_config.waitingList), 20000, "Waiting list field not found within timeout")
          app_config.waitingList.getText().then(function(text){
            app_config.waitingList.click()
            // Comparing the text of the button after the click    
            if (text == 'Enable')        
                    {
                        browser.wait(until.presenceOf(app_config.waitingListSize), 20000, "Waiting size is not found within timeout")     
                        app_config.waitingListSize.clear().sendKeys(waitingSize)
                    }     
        })
          browser.wait(until.presenceOf(app_config.availabilityType), 20000, "Availability Type field not found within timeout")
          app_config.availabilityType.click()
          browser.wait(until.presenceOf(app_config.phoneNumber), 20000, "Phone number field not found within timeout")
          app_config.phoneNumber.clear().sendKeys(phoneNumber)
          browser.wait(until.presenceOf(app_config.fee), 20000, "Fee field not found within timeout")
          app_config.fee.clear().sendKeys(fee)
          browser.wait(until.presenceOf(app_config.followupFee), 20000, "Followup fee field not found within timeout")
          app_config.followupFee.clear().sendKeys(followupFee)
          browser.wait(until.presenceOf(app_config.reportFee), 20000, "Report fee field not found within timeout")
          app_config.reportFee.clear().sendKeys(reportFee)
          browser.wait(until.presenceOf(app_config.status), 20000, "Status field not found within timeout")
          app_config.status.click()
          browser.wait(until.presenceOf(app_config.videoConsultation), 20000, "Video Consultation field not found within timeout")
          app_config.videoConsultation.click()
          browser.wait(until.presenceOf(app_config.updateBTN), 20000, "Update button not found within timeout")
          app_config.updateBTN.click()

     },
     
      app_config
    }