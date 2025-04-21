var doc_signin_cred = require("../test_data/credentials.json")
var signin_api = require("../api/sign_in")
var signIn_data = doc_signin_cred.doctor_signin_medical
var select_org_api = require("../api/org_select")
var config_api = require("../api/v3_config")
var config_data = require("../test_data/v3_config_data.json")
var config = config_data.configurations
var log_out_api = require("../api/log_out")
var {signInPageWebElements} = require("../page_objects/common_pages/signin_page.ob")
var until = protractor.ExpectedConditions

describe('Verify System User log in', function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        browser.get('auth/login')
    })
    describe('Enter BMDC and password and click on sign in button and select the organization', () => {
        it('Should successfully sign in and redirect to the dashboard with the selected organization', () => {
            signin_api.docSignIn(signIn_data.bmdc, signIn_data.password)
            browser.wait(until.urlContains('doc-workspace/org-selection'),7000).then((result)=> {
                expect(result).toEqual(true);
            })
            select_org_api.selectOrg()
           browser.wait(until.urlContains('doc-workspace/dashboard'),5000).then((result)=>{
               expect(result).toEqual(true);
           })
       })
    })
})

describe('Enter all the values of every element and save the configuration', () => {
    it('Should successfully save the configurations for the Jotno Prescription type', () => {
        config_api.redirectToTemplatePage()
       browser.wait(until.urlContains('doc-workspace/prescription-template'),7000).then((result)=>{
           expect(result).toEqual(true)
       })
        config_api.jotnoPrescription(config.page_margin_top, config.header_text, config.footer_text)
    })
   browser.sleep(500)
    it('Should successfully save the configurations for the Doctor Prescription type', () => {
        config_api.doctorPrescription(config.page_width, config.page_height)
    })
    afterEach(() => {
        browser.sleep(2000);
        config_api.default(config.page_margin_left, config.page_margin_right, config.page_header_height,
            config.page_footer_height, config.content_left_width, config.content_left_margin_top,
            config.content_right_margin_top, config.content_left_margin_left,
            config.content_right_margin_left, config.font_size, config.info_margin_top,
            config.info_margin_left, config.info_label, config.qr_code_margin_top,
            config.qr_code_margin_left, config.qr_code_text_font_size, config.qr_code_space,
            config.signature_margin_left, config.signature_text, config.complaint_text,
            config.complaint_margin_left, config.complaint_margin_top, config.complaint_margin_bottom,
            config.complaint_font_size, config.history_text, config.history_component_height,
            config.history_line_spacing, config.findings_text, config.findings_absolute_position_top,
            config.findings_absolute_position_left, config.investigation_text,
            config.investigation_margin_left, config.investigation_margin_top,
            config.investigation_margin_bottom, config.investigation_font_size, config.diagnosis_text,
            config.diagnosis_component_height, config.diagnosis_line_spacing, config.medication_text,
            config.medication_absolute_position_top, config.medication_absolute_position_left,
            config.eyeglass_text, config.eyeglass_margin_left, config.eyeglass_margin_top,
            config.eyeglass_margin_bottom, config.eyeglass_font_size, config.iop_text, config.iop_component_height,
            config.iop_line_spacing, config.advice_text, config.advice_absolute_position_top,
            config.advice_absolute_position_left, config.referral_text, config.referral_margin_left,
            config.referral_margin_top, config.referral_margin_bottom, config.referral_font_size,
            config.followUp_component_height, config.followUp_line_spacing)
        config_api.preview()
        browser.sleep(7000)
    })
})
beforeEach(() => {
    browser.sleep(5000);
}),
describe('Click on the log out button', () => {
    it('Should successfully log out', () => {
        log_out_api.docLogOut()
        expect(signInPageWebElements.username.isPresent()).toBe(true);
    })
})