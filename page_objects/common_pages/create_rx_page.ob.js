/* This is collection of prescription creation objects*/
var until = protractor.ExpectedConditions

module.exports = {
    // define all web elements
    newRxPageWebElements: {
        newrx_button: $('a[href*="/doc-workspace/prescription"]'),
        reg_patient: element.all(by.className('btn btn-sm btn-warning pt-0 pb-0 right-sidebar-toggle')).get(1),
        search_patient: element.all(by.className('btn btn-sm btn-warning pt-0 pb-0 right-sidebar-toggle')).get(0),
        pt_name: element.all(by.name('name')).get(1),
        pt_phn: element(by.id('ptn-reg-phone-input')),
        pt_age: element.all(by.name('year')).get(1),
        reg_button: element(by.buttonText("Register This Patient")),
        search_bar: element(by.name('searchValue')),
        search_button: $('.input-group .input-group-append >button'),
        crtnewrx_button: element.all(by.css('#ptn-search-diag-container .card .btn-toolbar div:nth-of-type(5)')).get(0),
        complain_button: element(by.id('comp-panel-body')),
        add_complain: $('#comp-dg-wrap #fav-tag-container .tags-w-options li:nth-of-type(1) .tag-holder'),
        findings_button: element(by.id('findings-panel-header')),
        other_button: element(by.xpath('//*[@id="ui-tabpanel-2-label"]')),
        add_findings: $('#exam-dg-wrap #fav-tag-container #exam-fav-ul li:nth-of-type(1) .tag-holder'),
        inv_button: element(by.id('inv-panel-header')),
        add_inv: $('#inv-dg-wrap #inv-fav-tag-container ul.tags-w-options li:nth-of-type(1) .tag-holder'),
        diagnosis_button: element(by.id('diagnosis-panel-header')),
        add_diagnosis: $('#diag-dg-wrap #fav-tag-container .tags-w-options li:nth-of-type(1) .tag-holder'),
        med_button: element(by.id('med-panel-header')),
        add_med: $('#med-dg-wrap #med-fav-tag-container ul.tags li:nth-of-type(1) .tag-holder'),
        adv_button: element(by.id('adv-panel-body')),
        add_adv: $('#adv-dg-wrap #fav-tag-container .tags-w-options li:nth-of-type(1) .tag-holder'),
        followup_button: element(by.id('followup-panel-header')),
        add_followup: $('div table tbody tr:nth-child(3) td:nth-child(2)'),
        done_button: element(by.id('dg-comp-done')),
        saveprint_dropdown: element(by.id('btnGroupDrop2')),
        saveonly_button: element(by.id('save-only-btn')),
        pt_text: element(by.css('p[class="mb-0"] strong')) 
    },
    // Navigate to +New Rx
    clickonNewRx: function() {
        /*
        This function will click on the New Rx+ button which will navigate to new rx page.
        @return: None
        */
        browser.wait(until.presenceOf(this.newRxPageWebElements.newrx_button), 10000, '"New Rx+" button is not present within timeout')
        this.newRxPageWebElements.newrx_button.click();
    },
    // Register new patient
    clickonRegNewPt: function() {
        /*
        This function will click on the +Register New Patient button which will navigate to new patient registration dialogue.
        @return: None
        */
        browser.wait(until.presenceOf(this.newRxPageWebElements.reg_patient), 10000, '"+Register New Patient" button is not present within timeout')
        this.newRxPageWebElements.reg_patient.click();
    },
    enterPtName: function(ptName) {
        /*
        This function will enter patient's name.
        @ptName:  MANDATORY object
                This is used  to enter patient's name.
         @return: None
        */
        browser.wait(until.presenceOf(this.newRxPageWebElements.pt_name), 10000, '"Patient Name" field in Doctor Registration page is not present within timeout')
        this.newRxPageWebElements.pt_name.sendKeys(ptName);
    },
    enterPtPhn: function(ptPhn) {
        /*
        This function will enter patient's phone number.
        @ptPhn:  MANDATORY object
                This is used  to enter patient's phone number.
         @return: None
        */
        browser.wait(until.presenceOf(this.newRxPageWebElements.pt_phn), 10000, '"Patient Phone No" field in Doctor Registration page is not present within timeout')
        this.newRxPageWebElements.pt_phn.sendKeys(ptPhn);
    },
    enterPtAge: function(ptAge) {
        /*
        This function will enter patient's age.
        @ptAge:  MANDATORY object
                This is used  to enter patient's age.
         @return: None
        */
        browser.wait(until.presenceOf(this.newRxPageWebElements.pt_age), 10000, '"Patient age" field in Doctor Registration page is not present within timeout')
        this.newRxPageWebElements.pt_age.sendKeys(ptAge);
    },
    clickonRegPt: function() {
        /*
        This function will click on the Register This Patient button which will register the patient.
        @return: None
        */
        browser.wait(until.presenceOf(this.newRxPageWebElements.reg_button), 10000, '"reg btn" is not present within timeout')
        this.newRxPageWebElements.reg_button.click();
    },
    // Search old patient
    clickonSearchPt: function() {
        /*
        This function will click on the Patient Search button which will navigate to patient lookup page.
        @return: None
        */
        browser.wait(until.presenceOf(this.newRxPageWebElements.search_patient), 10000, '"Patient Search" button is not present within timeout')
        this.newRxPageWebElements.search_patient.click();
    },
    searchPtName: function(namePt) {
        /*
        This function will write the name of the patient in the search bar to search him/her.
        @namePt:  MANDATORY object
                This is used  to write patient name in search bar.
        @return: None
        */
        browser.wait(until.presenceOf(this.newRxPageWebElements.search_bar), 50000, 'Search bar is not present within timeout')
        this.newRxPageWebElements.search_bar.sendKeys(namePt);
    },
    clickonSearchBtn: function() {
        /*
        This function will click on the search button which will search the patient.
        @return: None
        */
        browser.wait(until.presenceOf(this.newRxPageWebElements.search_button), 100000, 'Search button is not present within timeout')
        this.newRxPageWebElements.search_button.click();
    },
    clickonCreateNewRx: function() {
        /*
        This function will click on the Create New Rx button which will open a new rx for that patient.
        @return: None
        */
        browser.wait(until.presenceOf(this.newRxPageWebElements.crtnewrx_button), 10000, '"Create New Rx" button is not present within timeout')
        this.newRxPageWebElements.crtnewrx_button.click();
    },
    //create prescription
    selectCompalin: function() {
        /*
        This function will add a complain to the complain section.
        @return: None
        */
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.complain_button);
        browser.wait(until.presenceOf(this.newRxPageWebElements.add_complain), 1000);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.add_complain);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.done_button);
    },
    selectFindings: function() {
        /*
        This function will add a findings to the findings section from the other tab.
        @return: None
        */
        browser.sleep(3000)
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.findings_button);
        browser.wait(until.presenceOf(this.newRxPageWebElements.other_button), 5000);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.other_button);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.add_findings);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.done_button);
    },
    selectInvestigation: function() {
        /*
        This function will add an investigation to the investigation section.
        @return: None
        */
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.inv_button);
        browser.wait(until.presenceOf(this.newRxPageWebElements.add_inv), 5000);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.add_inv);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.done_button);
    },
    selectDiagnosis: function() {
        /*
        This function will add an diagnosis to the diagnosis section.
        @return: None
        */
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.diagnosis_button);
        browser.wait(until.presenceOf(this.newRxPageWebElements.add_diagnosis), 1000);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.add_diagnosis);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.done_button);
    },
    selectMedication: function() {
        /*
        This function will add a medication to the medication section.
        @return: None
        */
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.med_button);
        browser.wait(until.presenceOf(this.newRxPageWebElements.add_med), 1000);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.add_med);
        browser.sleep(500)
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.done_button);
    },
    selectAdvice: function() {
        /*
        This function will add an advice to the advice section.
        @return: None
        */
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.adv_button);
        browser.wait(until.presenceOf(this.newRxPageWebElements.add_adv), 1000);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.add_adv);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.done_button);
    },
    selectFollowup: function() {
        /*
        This function will add a follow-up to the follow-up section.
        @return: None
        */
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.followup_button);
        browser.wait(until.presenceOf(this.newRxPageWebElements.add_followup), 1000);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.add_followup);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.done_button);
    },
    clickonSavePrint: function() {
        /*
        This function will only save the prescription.
        @return: None
        */
        browser.wait(until.presenceOf(this.newRxPageWebElements.saveprint_dropdown), 10000);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.saveprint_dropdown);
        browser.wait(until.presenceOf(this.newRxPageWebElements.saveonly_button), 10000);
        browser.executeScript("arguments[0].click();", this.newRxPageWebElements.saveonly_button);
        browser.sleep(5000)
    },
}