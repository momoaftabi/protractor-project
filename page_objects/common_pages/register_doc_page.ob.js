/* This is collection of Doctor creation objects*/
var until = protractor.ExpectedConditions;
module.exports = {
    // define all web elements
    regDocPageWebElements: {
        doctorselect_button: element(by.css('[href="/doctor/list"]')),
        doctorreg_button: $('[href="/doctor/registration"]'),
        doc_name: element(by.id('doctor.name')),
        doc_type: element(by.css('button[data-id= "doctor.doctorType"]')),
        specialization_med: $('div ul li:nth-child(1) span[ class= "text"]'),
        specialization_den: $('div ul li:nth-child(2) span[ class= "text"]'),
        bmdc_reg: element(by.id('doctor.bmdcNumber')),
        doc_phn: element(by.id('doctor.user.phoneNumber')),
        degree: $('button[data-id="doctor.degrees"]'),
        specialization: $('button[data-id="doctor.specializations"]'),
        gender: $('button[data-id="doctor.gender"]'),
        video_assist: $('.custom-control-label'),
        reg_button: element(by.buttonText("Save"))
    },
    // Navigate to +New Doctor
    clickonDoctorReg: function () {
        /*
        This function will click on the +New Doctor button which will navigate to new doctor registration page.
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.doctorreg_button), 30000, '"+ New Doctor" is not present within timeout')
        this.regDocPageWebElements.doctorreg_button.click();
        browser.sleep(300);
    },
    clickonDoctor: function () {
        /*
        This function will click on the Doctor button of the dashboard which will navigate to doctor list.
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.doctorselect_button), 30000, '"Doctor" in Dashboard is not present within timeout')
        this.regDocPageWebElements.doctorselect_button.click();
        browser.sleep(300);
    },
    enterDocName: function (docName) {
        /*
        This function will enter doctor's name.
        @docName:  MANDATORY object
                This is used  to enter doctor's name.
         @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.doc_name), 30000, '"Doctor Name" field in Doctor Registration page is not present within timeout')
        this.regDocPageWebElements.doc_name.sendKeys(docName)
    },
    selectDocTypeMedical: function () {
        /*
        This function will select type of the doctor (medical) from the dropdown.
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.doc_type), 20000, '"Doctor Type" field in Doctor Registration page is not present within timeout')
        this.regDocPageWebElements.doc_type.click();
        element(by.cssContainingText('span.text', 'Medical')).click();
    },
    selectDocTypeDental: function () {
        /*
        This function will select type of the doctor (dental) from the dropdown.
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.doc_type), 20000, '"Doctor Type" field in Doctor Registration page is not present within timeout')
        this.regDocPageWebElements.doc_type.click();
        element(by.cssContainingText('span.text', 'Dental')).click();
    },
    enterBmdc: function (bmdcReg) {
        /*
        This function will enter doctor's BMDC.
        @bmdcReg:  MANDATORY object
                This is used  to enter doctor's BMDC.
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.bmdc_reg), 20000, '"Registration Number" field in Doctor Registration page is not present within timeout')
        this.regDocPageWebElements.bmdc_reg.sendKeys(bmdcReg)
    },
    enterDocPhn: function (docPhn) {
        /*
        This function will enter doctor's Phone No.
        @docPhn:  MANDATORY object
                This is used  to enter doctor's Phone No.
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.doc_phn), 20000, 'Phone Number" field in Doctor Registration page is not present within timeout')
        this.regDocPageWebElements.doc_phn.sendKeys(docPhn)
    },
    selectDocDegree: function () {
        /*
        This function will say select doctor's degree from the dropdown.
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.degree), 20000, '"Doctor Degree" field in Doctor Registration page is not present within timeout')
        this.regDocPageWebElements.degree.click();
        element(by.cssContainingText('span.text', 'FACP')).click();
    },
    selectSpecializationMedical: function () {
        /*
        This function will select specialization of the medical doctor from the dropdown.
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.specialization), 20000, '"Doctor specialization" field in Doctor Registration page is not present within timeout')
        this.regDocPageWebElements.specialization.click();
        element(by.cssContainingText('span.text', 'Hepatology')).click();
    },
    selectSpecializationDental: function () {
        /*
        This function will select specialization of the dental doctor from the dropdown.
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.specialization), 20000, '"Doctor specialization" field in Doctor Registration page is not present within timeout')
        this.regDocPageWebElements.specialization.click();
        element(by.cssContainingText('span.text', 'Conservative Dentistry and Endodontics')).click();
    },
    selectDocGender: function () {
        /*
        This function will select doctor's gender
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.gender), 20000, '"Doctor Gender" field in Doctor Registration page is not present within timeout')
        this.regDocPageWebElements.gender.click();
        element(by.cssContainingText('span.text', 'Male')).click();
    },
    selectVideoAssist: function () {
        /*
        This function will say select/enable the video assist button.
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.video_assist), 20000, '"Video Assist Button"  in Doctor Registration page is not present within timeout')
        this.regDocPageWebElements.video_assist.click();
    },

    // Register New Doctor
    clickSave: function () {
        /*
        This function will click the save button to register a doctor.
        @return: None
        */
        browser.wait(until.presenceOf(this.regDocPageWebElements.reg_button), 20000, '"Save button" in Doctor Registration page is not present within timeout')
        this.regDocPageWebElements.reg_button.click();
    }

}