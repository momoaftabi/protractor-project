var pt_menu_obj = require("../page_objects/common_pages/pt_select.ob")
module.exports = {
    selectPtPage: () => {
        /** 
        This function will click on the Patients button from Nav-Bar.
        @return: None
        */
        pt_menu_obj.clickonPt()
    }
}