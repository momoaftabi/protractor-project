var doc_signin_data = require("../test_data/credentials.json")
var patient_data = require("../test_data/patient_credentials.json")
var signin_api = require("../api/doc_sign_in")
var orgselect_api = require("../api/org_select")
var newptselect_api = require("../api/newpt_select")
var ptselect_api = require("../api/pt_select")
var createrx_api = require("../api/create_rx")
var log_out_api = require("../api/log_out")
var creatept_api = require("../api/create_newpt")
var searchpt_api = require("../api/pt_search")
var editpt_api = require("../api/edit_pt")
var addrx_api = require("../api/add_rx")
var searchrx_api = require("../api/search_rx")
var until = protractor.ExpectedConditions

var {newPtPageWebElements} = require("../page_objects/common_pages/create_new_pt.ob")
var {ptSelectPageWebElements} = require("../page_objects/common_pages/pt_select.ob")
var {searchRxPageWebElements} = require("../page_objects/common_pages/search_rx.ob")
var {ptSeachPageWebElements} = require ("../page_objects/common_pages/pt_search.ob")
var {newRxPageWebElements} = require ("../page_objects/common_pages/create_rx_page.ob")
var {signInPageWebElements} = require ("../page_objects/common_pages/doc_signin_page.ob")
var {editPtPageWebElements} = require ("../page_objects/common_pages/edit_pt.ob")
var {newRxPageWebElements} = require ("../page_objects/common_pages/create_rx_page.ob")



describe('Create new doctor', function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false);
        browser.get('auth/login')
    })
    describe('Type username and password and click sign in button', function() {
        it('should Sign in successfully', function() {
            signin_api.docSignIn(doc_signin_data.doctor_signin_medical.bmdc, doc_signin_data.doctor_signin_medical.type, doc_signin_data.doctor_signin_medical.password);
            expect(browser.getCurrentUrl()).toEqual('https://staging1.jotno.net/auth/login');
        })
    
    });
});

describe('Click on an organization', function() {
    it('should select an organization successfully', function() {
        orgselect_api.selectOrg()
       expect(browser.getCurrentUrl()).toEqual('https://staging1.jotno.net/doc-workspace/org-selection');
    });
});

describe('Register New patient', function() {
    it('should register a new patient', function() {
        newptselect_api.selectNewPt()
        creatept_api.createNewPt(patient_data.Create_New_Patient.name, patient_data.Create_New_Patient.phn,
            patient_data.Create_New_Patient.age, patient_data.Create_New_Patient.gender, patient_data.Create_New_Patient.bloodGroup,
            patient_data.Create_New_Patient.demography, patient_data.Create_New_Patient.email, patient_data.Create_New_Patient.fatherName,
            patient_data.Create_New_Patient.motherName, patient_data.Create_New_Patient.spouseName, patient_data.Create_New_Patient.address)
         expect(newPtPageWebElements.pt_phn.getText()).toBe('');
    });
});

describe('Register New patient', function() {
    it('should register a new patient', function() {
        ptselect_api.selectPtPage()
        expect(ptSelectPageWebElements.newptselect_button.isPresent()).toBe(true); //ok
     });
});

describe('Search a patient', function() {
    it('should search and view details of a patient', function() {
    searchpt_api.searchPt(patient_data.Search_Patient.name)
    expect(ptSeachPageWebElements.ptsearch_field.isPresent()).toBe(false);
    });
});

describe('Edit patient profile', function() {
    it('should edit patient profile', function() {
       editpt_api.editPt(patient_data.Edit_Patient.editedname,patient_data.Edit_Patient.editedaddress)
       browser.wait(until.presenceOf(editPtPageWebElements.add_rx), 10000).then(() => {
       expect(editPtPageWebElements.add_rx.isPresent()).toBe(true)});
    });
});

describe('New rx for a patient', function() {
    it('should create new rx for a patient', function() {
        
    browser.sleep(2000)
        addrx_api.addRx()
        createrx_api.createNewRx()
        browser.wait(until.presenceOf(newRxPageWebElements.reg_patient), 10000).then(() => {
        expect(newRxPageWebElements.reg_button.isPresent()).toBe(true);});  
    });
});

describe('Search old rx', function() {
    it('should search an old rx using search filters', function() {
        searchrx_api.oldRx()
        searchrx_api.searchRx(patient_data.Search_Rx.fromdate,patient_data.Search_Rx.todate,
            patient_data.Search_Rx.phoneno,patient_data.Search_Rx.ptname, patient_data.Search_Rx.fatherName,
            patient_data.Search_Rx.motherName,patient_data.Search_Rx.rxNumber)
            browser.sleep(2000)
            expect(searchRxPageWebElements.rx_text.getText()).toBe('2000YF6B3JKCZ');
        })
            
    
});
afterEach(() => {
    browser.sleep(2000)
})
describe('Click on the log out button', () => {
    it('Should successfully log out', () => {
        log_out_api.docLogOut()
        expect(signInPageWebElements.username.getText()).toBe('');
    })
})