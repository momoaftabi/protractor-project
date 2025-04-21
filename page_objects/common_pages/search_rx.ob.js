/* This is collection of prescription search objects*/
var until = protractor.ExpectedConditions

module.exports = {
    // define all web elements
    searchRxPageWebElements: {
        oldrx_menu: element(by.id('old-rx-nav-link')),
        from_date: $('input[name="fromDate"]'),
        to_date: $('input[name="toDate"]'),
        phone:$('input[id="rx-history-phone"]'),
        name: $('input[id="rx-history-name"]'),
        father: $('input[id="rx-history-father-Nmae"]'),
        mother: $('input[id="rx-history-mother-Name"]'),
        rx_no: $('input[id="rx-history-rx-number"]'),
        rxsearch_button: element(by.id('rx-history-search')),
        rx_text: element(by.xpath('//*[@id="page-content-wrapper"]/div/div[2]/div[2]/div[1]/div[2]/div/div[1]/div/div[1]/h5/span[2]/strong')), 
},
    clickonOldRx: function () {
    /*
    This function will click on the Old Rx button from Nav-Bar.
    @return: None
    */
    browser.wait(until.presenceOf(this.searchRxPageWebElements.oldrx_menu), 10000, 'Old Rx page is not present within timeout')
    this.searchRxPageWebElements.oldrx_menu.click();
    },

    enterFromDate: function (fromDate) {
    /*
    This function will search an old Rx.
    @param fromDate:  MANDATORY object
             This is used  to write the date from when the rx is to be searched.
    @return: None
    */
    browser.wait(until.presenceOf(this.searchRxPageWebElements.from_date), 20000, '"From Date" field in Old Rx page is not present within timeout')
    this.searchRxPageWebElements.from_date.sendKeys(fromDate);
    },

    enterToDate: function (toDate) {
    /*
    This function will search an old Rx.
    @param toDate:  MANDATORY object
             This is used  to write the date to when the rx is to be searched.
    @return: None
    */
    browser.wait(until.presenceOf(this.searchRxPageWebElements.to_date), 20000,'"To Date" field in Old Rx page is not present within timeout')
    this.searchRxPageWebElements.to_date.sendKeys(toDate);
    },
    enterPtPhn: function (phoneNo) {
    /*
    This function will search an old Rx.
    @param phoneNo:  MANDATORY object
              This is used to write patient's phone number.
    @return: None
    */
    browser.wait(until.presenceOf(this.searchRxPageWebElements.phone), 20000, '"Phone Number" field in Old Rx page is not present within timeout')
    this.searchRxPageWebElements.phone.sendKeys(phoneNo);
    },
    enterPtName: function (ptname) {
    /*
    This function will search an old Rx.
    @param ptname:  MANDATORY object
             This is used to write patient's name.
    @return: None
    */
    browser.wait(until.presenceOf(this.searchRxPageWebElements.name), 20000,'"Patient Name" field in Old Rx page is not present within timeout')
    this.searchRxPageWebElements.name.sendKeys(ptname);
    },
    enterPtfather: function (fatherName) {
    /*
    This function will search an old Rx.
    @param fatherName:  MANDATORY object
             This is used to write patient's fathers name.
    @return: None
    */
    browser.wait(until.presenceOf(this.searchRxPageWebElements.father), 20000, '"Fathers Name" field in Old Rx page is not present within timeout')
    this.searchRxPageWebElements.father.sendKeys(fatherName);
    },
    enterPtmother: function (motherName) {
    /*
    This function will search an old Rx.
    @param motherName:  MANDATORY object
               This is used to write patient's mothers name.
    @return: None
    */
    browser.wait(until.presenceOf(this.searchRxPageWebElements.mother), 20000, '"Mothers Name" field in Old Rx page is not present within timeout')
    this.searchRxPageWebElements.mother.sendKeys(motherName);
    },
    enterrxNo: function (rxNo) {
    /*
    This function will search an old Rx.
    @param rxNo:  MANDATORY object
            This is used to write Rx number.
    @return: None
    */
    browser.wait(until.presenceOf(this.searchRxPageWebElements.rx_no), 20000, '"Spouse Name" field in Old Rx page is not present within timeout')
    this.searchRxPageWebElements.rx_no.sendKeys(rxNo);
    },
    clickonSearchRx: function () {
    /*
    This function will click on the search button which will search the Rx.
    @return: None
    */
    browser.wait(until.presenceOf(this.searchRxPageWebElements.rxsearch_button), 20000, '"Search " button in Old Rx page is not present within timeout')
    this.searchRxPageWebElements.rxsearch_button.click();
}
}