var doc_signin_cred = require("../test_data/credentials.json")
var signin_api = require("../api/sign_in")
var signIn_data = doc_signin_cred.doctor_signin_medical
var select_org_api = require("../api/org_select");
var appointment_api = require("../api/book_appointment")
var appointment_cred = require("../test_data/appointment_credentials.json")
var registered_data = appointment_cred.registered_patient
var unregistered_data = appointment_cred.unregistered_patient

var log_out_api = require("../api/log_out")
var {signInPageWebElements} = require ("../page_objects/common_pages/doc_signin_page.ob")
var {appointmentPageWebElements} = require ("../page_objects/common_pages/appointment_page.ob")


describe('Verify System User log in', function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        browser.get('auth/login')
    })
    
    describe('Enter BMDC and password and click on sign in button and select the organization', () => {
        it('Should successfully sign in and redirect to the dashboard with the selected organization', () => {
            signin_api.docSignIn(signIn_data.bmdc, signIn_data.password)
            expect(browser.getCurrentUrl()).toEqual('https://staging1.jotno.net/auth/login');
            select_org_api.selectOrgApp()
            expect(browser.getCurrentUrl()).toEqual('https://staging1.jotno.net/doc-workspace/org-selection');
        })
    })
})

describe('Go to appointment page and create an appointment', () => {
    it('Should successfully book appointment for slot type registered user', () => {
        appointment_api.slot()
        appointment_api.registered(registered_data.phoneNumber)
        expect(appointmentPageWebElements.appointment_info_btn.isDisplayed()).toBe(true);
    })
 })
describe('Change the org to for taking serial type appointment', () => {
    it('should successfully change the org', () => {
        appointment_api.orgSwitch();
        expect(appointmentPageWebElements.orgname.getText()).toBe('smrity test hospital');
    })
}),
describe('Go to appointment page and create an appointment for serial', () => {
    it('Should successfully book appointment for serial type unregistered user', () => {
        appointment_api.unregistered(unregistered_data.phoneNumber, unregistered_data.name,
            unregistered_data.age)
            expect(appointmentPageWebElements.appointment_info_btn.isPresent()).toBe(true);
    })
})
afterEach(() => {
    browser.sleep(5000)
})

describe('Click on the log out button', () => {
    it('Should successfully log out', () => {
        log_out_api.docLogOut()
        expect(signInPageWebElements.username.getText()).toBe('');
    })
})