/*This is collection of back channel login objects*/
var until = protractor.ExpectedConditions
module.exports = 
{
    backChannelLogInElements: 
    {
        // Define all web elements
        doctorSelectButton: element(by.css('.left-menu a:nth-child(3)')),
        createDoctorAccAccessReq: element(by.css('.collapse ul li:nth-child(6) a')),
        selectType: element(by.id('search-type')),
        selectDocType: element(by.css('option[value = "MEDICAL"]')),
        docBMDC: element(by.id('search-bmdc')),
        search: element(by.id('search')),
        sendAccessReq: element(by.id('send-access-request')),
        docAccAccessReq: element(by.css('[href="/doctor-account-access/list"]')),
        docApproval: element(by.xpath('//tbody/tr[1]/td[11]/div[1]/button[4]')),
        submit: element(by.xpath('//body/div[6]/div[3]/div[1]/button[1]')),
        approveTab: element(by.id('approve-tab')),
        backChannelLogin: element(by.xpath('//tbody/tr/td[12]/div[1]/button[2]')),
        expireDoctor: element(by.xpath('//tbody/tr/td[12]/div[1]/button[3]'))


 },
    clickOnDoctorSelect: function() {
        /** 
         This function will nagivate to the all doctor page
         @return: None
         */
        browser.wait(until.elementToBeClickable(this.backChannelLogInElements.doctorSelectButton), 2000, '"+Doctor" page is not navigate within timeout')
        this.backChannelLogInElements.doctorSelectButton.click();
    },
    clickOnCreateDocAccAccReq: function() {
        /** 
         * This function will navigate to that page from where doctor is found through
         bmdc
         *@return: None
         */
        browser.wait(until.elementToBeClickable(this.backChannelLogInElements.createDoctorAccAccessReq), 2000, '"+Doctor" access account page is not navigate within timeout')
        this.backChannelLogInElements.createDoctorAccAccessReq.click();
        browser.sleep(500)
    },
  clickOnSelectDocType: function() {
        /**
         * This function will select the doctor type
         * @return: None
         */
        this.backChannelLogInElements.selectType.click();
        browser.wait(until.elementToBeClickable(this.backChannelLogInElements.selectDocType), 2000, 'doctor type is not visible within timeout')
        this.backChannelLogInElements.selectDocType.click();
    },
    enterDocBMDC: function(docBMDC) {
        /** 
         * This function will put the bmdc for finding doctor
         * @param docBMDC: Mandatory objects
         *     This is used to enter doctor's bmdc
         *  @return: None
         */
        browser.wait(until.presenceOf(this.backChannelLogInElements.docBMDC),2000, 'the text box is not visible within timeout')
        this.backChannelLogInElements.docBMDC.sendKeys(docBMDC);
    },
    clickOnSearch: function() {
        /**
         * This function will click on the search button to find the doctor
         * @return: None
         */
        browser.wait(until.elementToBeClickable(this.backChannelLogInElements.search), 2000, 'the pending doctor list is not visible within timeout')
        this.backChannelLogInElements.search.click()   
    },
    clickOnSendAccessReq: function() {
        /**
         * This function will click on the button to send the access request
         * @return: None
         */
        browser.wait(until.elementToBeClickable(this.backChannelLogInElements.sendAccessReq), 2000, 'the pending doctor list is not visible within timeout')
        this.backChannelLogInElements.sendAccessReq.click()
    },
    clickOnDoctorAccAccessReq: function() {
        /**
         * This function will navigate to the page where all the doctor's pending
         request will store
         * @return: None
         */
        browser.wait(until.elementToBeClickable(this.backChannelLogInElements.docAccAccessReq), 2000, 'request is not send within timeout')
        this.backChannelLogInElements.docAccAccessReq.click();
    },
    clickOnDocApproval: function() {
        /**
         * This function will approve the pending doctor
         * @return: None
         */
        browser.wait(until.elementToBeClickable(this.backChannelLogInElements.docApproval), 2000, 'this approval button is not worked within timeout')
        this.backChannelLogInElements.docApproval.click();
    },
    clickOnSubmitButton: function() {
        /**
         * This function submits the time of doctor's account access
         * @return: None
         */
        browser.wait(until.elementToBeClickable(this.backChannelLogInElements.submit), 2000, 'submit is not worked within timeout')
        this.backChannelLogInElements.submit.click();
    },
    clickOnApprovalTab: function() {
        /**
         * This function navigates to the approved tab
         * @return: None
         */
        browser.wait(until.elementToBeClickable(this.backChannelLogInElements.approveTab), 2000, 'the approval tab is not present within timeout')
        this.backChannelLogInElements.approveTab.click();
    },
    clickOnBackChannelLogIn: function() {
        /**
         * This function logged into through back channel and give control to the child window
         * @return: None
         */
        browser.wait(until.elementToBeClickable(this.backChannelLogInElements.backChannelLogin), 2000, 'the log in is not worked within timeout')
        this.backChannelLogInElements.backChannelLogin.click();
        browser.sleep(1000)
        var windowHandles = browser.getAllWindowHandles();
            windowHandles.then(function(handles) {
               var parentWindow = handles[0];
               var childWindow = handles[1];
               browser.switchTo().window(childWindow);
               
            });
            browser.sleep(5000)
    },
    backToParrentWindow: function(){
        /**
         * This function is used to give control to parent window
         * @return: None
         */
        var windowHandles = browser.getAllWindowHandles();
        windowHandles.then(function(handles1) {
            var parentWindow1 = handles1[0];
            var childWindow1 = handles1[1];
            browser.switchTo().window(parentWindow1)
        });
    },
    clickOnAppDocExp: function(){
        /**
         * This function is used to expire the approved doctor
         * @return: None
         */
        browser.wait(until.presenceOf(this.backChannelLogInElements.expireDoctor),)
        this.backChannelLogInElements.expireDoctor.click();
    }

    }
