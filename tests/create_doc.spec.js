var domain = require('../test_data/config.json')
var signin_data = require("../test_data/credentials_staging2.json")
var newdoc_data = require("../test_data/doctor_info.json")
var signin_api = require("../api/sign_in")
var newdoc_api = require("../api/createnewdoc_navigate")
var regdoc_api = require("../api/register_doc")
var log_out_api = require("../api/log_out")
var {regDocPageWebElements} = require("../page_objects/common_pages/register_doc_page.ob")
var {signInPageWebElements} = require("../page_objects/common_pages/signin_page.ob")
describe('Create new doctor', function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false);
        browser.get('auth/login')
    })
    beforeAll (() =>
    {
        browser.sleep(1000)
    }),
    describe('Type username and password and click sign in button', function() {
        it('should Sign in successfully', function() {
            browser.get(domain.staging2).then(() => {
                signin_api.orgSignIn(signin_data.sqh_signin.username, signin_data.sqh_signin.userdomain, signin_data.sqh_signin.password)
            });
            expect(browser.getTitle()).toEqual('Dashboard - Jotno');
        });
    });
});
describe('Navigate to Doctor registration', function() {
    it('should navigate successfully', function() {
        newdoc_api.createNewDoctor()
        expect(browser.getTitle()).toEqual('Doctor Registration - Jotno');
    });
});
describe('Fill the form to register doctor', function() {
    it('should create a Medical doctor successfully', function() {
         /**
         * before running this spec please change the bmdc
         */
        regdoc_api.regDocMedical(newdoc_data.doctor_create_m.name, newdoc_data.doctor_create_m.reg, newdoc_data.doctor_create_m.phone)
        expect(regDocPageWebElements.doc_name.isPresent()).toBe(false);
    });
});
describe('Navigate to Doctor registration again', function() {
    it('should navigate successfully', function() {
        newdoc_api.navToNewDoctor()
        expect(browser.getTitle()).toEqual('Doctor Registration - Jotno');
    });
});
describe('Fill the form to register doctor', function() {
    it('should create a Dental doctor successfully', function() {
        /**
         * before running this spec please change the bmdc
         */
        regdoc_api.regDocDental(newdoc_data.doctor_create_d.name, newdoc_data.doctor_create_d.reg, newdoc_data.doctor_create_d.phone, newdoc_data.doctor_create_d.password)
        expect(regDocPageWebElements.doc_name.isPresent()).toBe(false);
    });
});
afterEach(() => {
        browser.sleep(1000)
    })
describe('Click on the log out button', () => {
    it('Should successfully log out', () => {
        log_out_api.orgLogOut()
        expect(signInPageWebElements.username.isPresent()).toBe(true);
    })
})