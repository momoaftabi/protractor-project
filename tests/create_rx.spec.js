var doc_signin_data = require("../test_data/credentials.json")
var patient_data = require("../test_data/patient_credentials.json")
var signin_api = require("../api/doc_sign_in")
var orgselect_api = require("../api/org_select")
var createrx_api = require("../api/create_rx")
var log_out_api = require("../api/log_out")
var {newRxPageWebElements} = require("../page_objects/common_pages/create_rx_page.ob")
var {signInPageWebElements} = require("../page_objects/common_pages/signin_page.ob")
var until = protractor.ExpectedConditions

describe('Create new doctor', function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false);
        browser.get('auth/login')
    })
    describe('Type username and password and click sign in button', function() {
        it('should Sign in successfully', function() {
        signin_api.docSignIn(doc_signin_data.doctor_signin_medical.bmdc, doc_signin_data.doctor_signin_medical.type, doc_signin_data.doctor_signin_medical.password) 
        browser.wait(until.urlContains('doc-workspace/org-selection'), 5000).then((result) => {
            expect(result).toEqual(true);
        });
        });
    });
});
describe('Click on an organization', function() {
    it('should select an organization successfully', function() {
        orgselect_api.selectOrg();
        browser.wait(until.urlContains('doc-workspace/dashboard'), 5000).then((result) => {
            expect(result).toEqual(true);
        });
    });
});
describe('Click on +new rx', function() {
    it('should go to new rx page successfully', function() {
        createrx_api.newRx();
        browser.wait(until.urlContains('doc-workspace/prescription'), 5000).then((result) => {
            expect(result).toEqual(true);
        });   
    });
});
describe('Register New patient', function() {
    it('should register a new patient', function() {
        createrx_api.regNewPt(patient_data.New_Patient.name, patient_data.New_Patient.phn, patient_data.New_Patient.age)
        browser.wait(until.invisibilityOf(newRxPageWebElements.reg_patient), 10000).then(() => {
        expect(newRxPageWebElements.reg_button.isDisplayed()).toBe(false);});   
    });
});
describe('New rx with new patient', function() {
    it('should create new rx for a new patient', function() {
        createrx_api.createNewRx()
        browser.wait(until.presenceOf(newRxPageWebElements.reg_patient), 10000).then(() => {
            expect(newRxPageWebElements.reg_button.isPresent()).toBe(true);});   
    });
});
describe('Search old patient', function() {
    it('should select an old patient', function() {
        createrx_api.searchOldPt(patient_data.Search_Patient.name);
        browser.wait(until.invisibilityOf(newRxPageWebElements.reg_patient), 10000).then(() => {
            expect(newRxPageWebElements.reg_button.isDisplayed()).toBe(false);});   
    });
});
describe('New rx with old patient', function() {
    it('should create new rx for an old patient', function() {
        createrx_api.createNewRx()
        browser.wait(until.presenceOf(newRxPageWebElements.reg_patient), 10000).then(() => {
            expect(newRxPageWebElements.reg_button.isPresent()).toBe(true);});      
    });
});
describe('Click on the log out button', () => {
    it('Should successfully log out', () => {
        log_out_api.docLogOut()
        expect(signInPageWebElements.username.isPresent()).toBe(true);
    })
})