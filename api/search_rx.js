var oldrx_page_obj = require("../page_objects/common_pages/search_rx.ob")
module.exports = {
    oldRx: () => {
        /*
        This function will click on the Old Rx button from Nav-Bar.
        @return: None
        */
        oldrx_page_obj.clickonOldRx()
    },
    searchRx: function(fromDate, toDate, phoneNo, ptname, fatherName, motherName, rxNo ) {
        /** 
        This function will search an old Rx.
        @param fromDate:  MANDATORY object
                This is used  to write the date from when the rx is to be searched.
        @param toDate:  MANDATORY object
                This is used  to write the date to when the rx is to be searched.
        @param phoneNo:  MANDATORY object
                This is used to write patient's phone number.
        @param ptname:  MANDATORY object
                This is used to write patient's name.
        @param fatherName:  MANDATORY object
                This is used to write patient's fathers name.
        @param motherName:  MANDATORY object
                This is used to write patient's mothers name.
        @param rxNo:  MANDATORY object
                This is used to write Rx number.
        @return: None
        */
        oldrx_page_obj.enterFromDate(fromDate)
        oldrx_page_obj.enterToDate(toDate)
        oldrx_page_obj.enterPtPhn(phoneNo)
        oldrx_page_obj.enterPtName(ptname)
        oldrx_page_obj.enterPtfather(fatherName)
        oldrx_page_obj.enterPtmother(motherName)
        oldrx_page_obj.enterrxNo(rxNo)
        oldrx_page_obj.clickonSearchRx()
    },
}