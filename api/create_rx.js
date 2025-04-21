var newrx_page_obj = require("../page_objects/common_pages/create_rx_page.ob")
module.exports = {
    newRx: () => newrx_page_obj.clickonNewRx(),
    regNewPt: function(ptname, phn, age) {
        /** 
        This function will register a new patient.
        @param ptname:  MANDATORY object
                This is used  to write patient name.
        @param phn:  MANDATORY object
                This is used  to write patient's phone number.
        @param age:  MANDATORY object
                This is used to write patient's age.
        @return: None
        */
        newrx_page_obj.clickonRegNewPt()
        newrx_page_obj.enterPtName(ptname)
        newrx_page_obj.enterPtPhn(phn)
        newrx_page_obj.enterPtAge(age)
        newrx_page_obj.clickonRegPt()
    },
    searchOldPt: function(namept) {
        /** 
        This function will search an old patient by his/her name.
        @param namept:  MANDATORY object
                This is used  to write patient name.
        @return: None
        */
        newrx_page_obj.clickonSearchPt()
        newrx_page_obj.searchPtName(namept)
        newrx_page_obj.clickonSearchBtn()
        newrx_page_obj.clickonCreateNewRx()
    },
    createNewRx: () => {
        /** 
        This function will create a new rx for a patient.
        @return: None
        */
        newrx_page_obj.selectCompalin()
        newrx_page_obj.selectFindings()
        newrx_page_obj.selectInvestigation()
        newrx_page_obj.selectDiagnosis()
        newrx_page_obj.selectMedication()
        newrx_page_obj.selectAdvice()
        newrx_page_obj.selectFollowup()
        newrx_page_obj.clickonSavePrint()   
    }
}