var regdoc_page_obj = require("../page_objects/common_pages/register_doc_page.ob")
module.exports= {
    regDocMedical: function (docname,bmdc,phn) {
        /** 
        This function will create a new medical doctor.
        @param docname:  MANDATORY object
                This is used  to write doctor name.
        @param bmdc:  MANDATORY object
                This is used  to write doctor's bmdc.
        @param phn:  MANDATORY object
                This is used  to write doctor's phone number.
        @return: None
        */
        regdoc_page_obj.enterDocName(docname)
        regdoc_page_obj.selectDocTypeMedical()
        regdoc_page_obj.enterBmdc(bmdc)
        regdoc_page_obj.enterDocPhn(phn)
        regdoc_page_obj.selectDocDegree()
        regdoc_page_obj.selectSpecializationMedical()
        regdoc_page_obj.selectDocGender()
        regdoc_page_obj.selectVideoAssist()
        regdoc_page_obj.clickSave()
    },
    regDocDental: function (docname,bmdc,phn) {
        /** 
        This function will create a new dental doctor.
        @param docname:  MANDATORY object
                This is used  to write doctor name.
        @param bmdc:  MANDATORY object
                This is used  to write doctor's bmdc.
        @param phn:  MANDATORY object
                This is used  to write doctor's phone number.
        @return: None
        */
        regdoc_page_obj.enterDocName(docname)
        regdoc_page_obj.enterBmdc(bmdc)
        regdoc_page_obj.enterDocPhn(phn)
        regdoc_page_obj.selectSpecializationDental()
        regdoc_page_obj.selectDocTypeDental()
        regdoc_page_obj.selectDocDegree()
        regdoc_page_obj.selectDocGender()
        regdoc_page_obj.selectVideoAssist()
        regdoc_page_obj.clickSave()
    }
}