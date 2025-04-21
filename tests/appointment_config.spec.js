var doc_signin_cred = require("../test_data/credentials.json")
var signin_api = require("../api/sign_in")
var signIn_data = doc_signin_cred.doctor_signin_medical
var select_org_api = require("../api/org_select")

var appointment_config_cred = require('../test_data/appointment_config_credentials.json')
var appointment_config_api = require('../api/appointment_config')
var general_data = appointment_config_cred.general
var schedule_data = appointment_config_cred.doctorSchedule

var log_out_api = require("../api/log_out")
var {signInPageWebElements} = require ("../page_objects/common_pages/doc_signin_page.ob")
var {app_config} = require("../page_objects/common_pages/appointment_config_page.ob")
var until = protractor.ExpectedConditions



describe('Verify System User log in', function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        browser.get('auth/login')
    })
    
    describe('Enter BMDC and password and click on sign in button and select the organization', () => {
        it('Should successfully sign in and redirect to the dashboard with the selected organization', () => {
            signin_api.docSignIn(signIn_data.bmdc, signIn_data.password)
            expect(browser.getCurrentUrl()).toEqual('https://staging1.jotno.net/auth/login');
            select_org_api.selectOrg()
            expect(browser.getCurrentUrl()).toEqual('https://staging1.jotno.net/doc-workspace/org-selection');
        })
    })
})

 describe('Go to appointment configuration page and save changes', () => {
    it('Should update general information successfully', () => {
        
        appointment_config_api.generalSlot(general_data.designation, general_data.timePerPatient,
            general_data.waitingSize,general_data.phoneNumber, general_data.fee, general_data.followupFee,
            general_data.reportFee)
            browser.wait(until.visibilityOf(app_config.editBTN), 10000).then(() => {
            expect(app_config.editBTN.isPresent()).toBe(true);});
    })
    
    it('Should add the doctor schedule times successfully', () => {
        appointment_config_api.doctorSchedule(schedule_data.startTimeSaturday, schedule_data.endTimeSaturday)
        expect(app_config.edit_icon.isPresent()).toBe(false);
    }),
    
    describe('Change the org to config serial type appointment', () => {
        it('should successfully change the org', () => {
            appointment_config_api.orgSwitch();
            browser.sleep(3000)
            expect(app_config.org_name.getText()).toBe('momo hospital ltd');
        })
    }),

    describe('Go to appointment configuration page and save changes for serial type', () =>{
        it('Should update general information successfully for serial', () => {
            appointment_config_api.generalSerial(general_data.designation, general_data.timePerPatient,
                general_data.waitingSize, general_data.phoneNumber, general_data.fee, general_data.followupFee,
                general_data.reportFee)
                browser.wait(until.visibilityOf(app_config.editBTN), 10000).then(() => {
                expect(app_config.editBTN.isPresent()).toBe(true);});  
        })
    
        it('Should add the doctor schedule times successfully', () => {
            appointment_config_api.doctorSchedule (schedule_data.startTimeSaturday, schedule_data.endTimeSaturday)
            expect(app_config.edit_icon.isPresent()).toBe(false); 
           })
    }),
    
    afterEach(() => {
        browser.sleep(5000)
    })
})

describe('Click on the log out button', () => {
    it('Should successfully log out', () => {
        log_out_api.docLogOut()
        expect(signInPageWebElements.username.getText()).toBe('');
    })
})