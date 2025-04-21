var domain = require('../test_data/config.json')
var root_signin_data = require("../test_data/root_credentials.json")
var root_signin_api = require("../api/sign_in")
var user_account_api = require("../api/user_account")
var user_add_data = require("../test_data/user_credentials.json")
var log_out_api = require("../api/log_out")
var {userCreateElements}= require("../page_objects/common_pages/user_create_page.ob")
var {signInPageWebElements} = require("../page_objects/common_pages/signin_page.ob")
var user_data = user_add_data.addRootUser
var root_data = root_signin_data.rootSignin


describe('Verify System User log in', function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        browser.get('auth/login')
    })
    describe('Enter root username, doamin and password and click on sign in button', () => {
        it('Should successfully sign in with root credentials', () => {
            browser.get(domain.staging2).then(() => {
                root_signin_api.orgSignIn(root_data.user, root_data.code, root_data.pass)
            });
            expect(browser.getTitle()).toEqual('Dashboard - Jotno');
        })
    })
})

describe('Create domain user account and logout', () => {
    it('Should create a new domain user account', () => {
        user_account_api.addUser(user_data.newUser, user_data.password, user_data.name,
            user_data.designation, user_data.dob, user_data.email, user_data.phone,
            user_data.present_address, user_data.permanent_address)
            expect(userCreateElements.fullNameFLD.isPresent()).toBe(false);
    });
   
})
afterEach(() => {
    browser.sleep(1000);
}),
describe('Click on the log out button', () => {
    it('Should successfully log out', () => {
        log_out_api.orgLogOut()
        expect(signInPageWebElements.username.isPresent()).toBe(true);
    })
})