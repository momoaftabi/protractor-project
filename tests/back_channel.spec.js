var domainData = require('../test_data/config.json')
var signInData = require('../test_data/credentials_staging2.json')
var backhannelData = require('../test_data/credentials.json')
var signInAPI = require('../api/sign_in')
var backChannelAPI = require('../api/Back_Channel')
var orgSelectAPI = require("../api/org_select")
var configApi = require("../api/v3_config")
var configData = require("../test_data/v3_config_data.json")
var configure = configData.configurations
var logOutApi = require("../api/log_out")
var {signInPageWebElements} = require("../page_objects/common_pages/signin_page.ob")
var until = protractor.ExpectedConditions

var {v3} = require("../page_objects/common_pages/v3_config_page.ob")

describe('Back Channel Login', function() {
    beforeAll(function() {
        browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.get('auth/login')
    })
    describe('Type username, code and password and click signin button', function() {
        it('should sign in successfully', function() {
            browser.get(domainData.staging2).then(() => {
                signInAPI.orgSignIn(signInData.sqh_signin.username, signInData.sqh_signin.userdomain, signInData.sqh_signin.password)
                expect(browser.getTitle()).toEqual('Dashboard - Jotno')
                 });
        });
    });
});
describe('Enter doctor bmdc to successfully create request through back channel', function() {
    it('should succefully create request', function() {
        backChannelAPI.backChannelLoginInfo(backhannelData.doctor_signin_medical.bmdc)
        expect(browser.getTitle()).toEqual('Doctor Search - Jotno')
         })
});
describe('Click on the button and give handle to child window', function() {
    it('Should successfully give handle to child window', function() {
        backChannelAPI.backChannelLogIn();
        browser.wait(until.urlContains('doc-workspace/org-selection'),7000).then((result)=> {
            expect(result).toEqual(true);
          })
    })
});
describe('Select the org successfully', function() {
    it('Should select the expected org', function() {
        orgSelectAPI.selectOrg();
        browser.wait(until.urlContains('doc-workspace/dashboard'),5000).then((result)=>{
            expect(result).toEqual(true);
        })
    });
});

describe('enter all the values to configure the prescription properly', ()=> {
    it('Should successfully save the configurations for the Jotno Prescription', ()=> {
        configApi.redirectToTemplatePage()
        browser.wait(until.urlContains('doc-workspace/prescription-template'),7000).then((result)=>{
            expect(result).toEqual(true)
        })
        configApi.jotnoPrescription(configure.page_margin_top, configure.header_text, configure.footer_text)
    })
    it('Should successfully save the configurations for the Doctor Prescription', () => {
        configApi.doctorPrescription(configure.page_width, configure.page_height)
       })
    afterEach(() => {
        configApi.default(configure.page_margin_left, configure.page_margin_right, configure.page_header_height,
            configure.page_footer_height, configure.content_left_width, configure.content_left_margin_top,
            configure.content_right_margin_top, configure.content_left_margin_left,
            configure.content_right_margin_left, configure.font_size, configure.info_margin_top,
            configure.info_margin_left, configure.info_label, configure.qr_code_margin_top,
            configure.qr_code_margin_left, configure.qr_code_text_font_size, configure.qr_code_space,
            configure.signature_margin_left, configure.signature_text, configure.complaint_text,
            configure.complaint_margin_left, configure.complaint_margin_top, configure.complaint_margin_bottom,
            configure.complaint_font_size, configure.history_text, configure.history_component_height,
            configure.history_line_spacing, configure.findings_text, configure.findings_absolute_position_top,
            configure.findings_absolute_position_left, configure.investigation_text,
            configure.investigation_margin_left, configure.investigation_margin_top,
            configure.investigation_margin_bottom, configure.investigation_font_size, configure.diagnosis_text,
            configure.diagnosis_component_height, configure.diagnosis_line_spacing, configure.medication_text,
            configure.medication_absolute_position_top, configure.medication_absolute_position_left,
            configure.eyeglass_text, configure.eyeglass_margin_left, configure.eyeglass_margin_top,
            configure.eyeglass_margin_bottom, configure.eyeglass_font_size, configure.iop_text, configure.iop_component_height,
            configure.iop_line_spacing, configure.advice_text, configure.advice_absolute_position_top,
            configure.advice_absolute_position_left, configure.referral_text, configure.referral_margin_left,
            configure.referral_margin_top, configure.referral_margin_bottom, configure.referral_font_size,
            configure.followUp_component_height, configure.followUp_line_spacing)
        configApi.preview()

        configApi.Save(v3.pres_type1, v3.pres_type2)
        {
            if(v3.pres_type1)
            {
                expect(v3.pres_type1.getText()).toEqual("Jotno Prescription")
            }
            if(v3.pres_type2)
            {
                expect(v3.pres_type2.getText()).toEqual("Doctor Prescription")
            }
        }
        browser.sleep(7000)
         })
}),
afterEach(() => {
    browser.sleep(1000);
}),
describe('Click on the log out button', () => {
    it('Should successfully log out', () => {
        logOutApi.docLogOut()
        expect(signInPageWebElements.username.isPresent()).toBe(true);
    })
    browser.sleep(1000);
}),
describe('Control goes to the parent window and click on log out button of org', () => {
    it('Should successfully goes control to parent window', () => {
        backChannelAPI.approvedDocExp()
        expect(browser.getTitle()).toEqual('Doctor Search - Jotno')
    })
    
    it('Should successfully log out', () => {
        browser.sleep(5000);
        logOutApi.orgLogOut();
        expect(browser.getTitle()).toEqual('Jotno')
    })
})

