var createnew_page_obj = require("../page_objects/common_pages/register_doc_page.ob")
module.exports = {
    createNewDoctor: function () {
        /** 
        This function will click on the Doctor button of the dashboard which will navigate to doctor list.
        Then it will click on +New Doctor button which will navigate to new doctor registration page.
        @return: None
        */
        createnew_page_obj.clickonDoctor()
        createnew_page_obj.clickonDoctorReg()
    },
    navToNewDoctor: function () {
        /** 
        This function will click on the +New Doctor button which will navigate to new doctor registration page.
        @return: None
        */
        createnew_page_obj.clickonDoctorReg()
    }
}