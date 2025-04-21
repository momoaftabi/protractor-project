var orgselect_page_obj = require("../page_objects/common_pages/org_select.ob")
module.exports = {
    selectOrg: function () {
        /** 
        This function will click on the Doctor's organization. it is optional. If the doctor has only one organization, then this page is absent
        @return: None
        */
        orgselect_page_obj.clickonOrg();
    },
selectOrgApp: function(){
        /** 
        This function will click on the Doctor's organization for book appointment. it is optional. If the doctor has only one organization, then this page is absent
        @return: None
        */
        orgselect_page_obj.clickonOrgApp();
}

}