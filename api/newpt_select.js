var newpt_menu_obj = require("../page_objects/common_pages/newpt_select.ob")
module.exports = {
    selectNewPt: () => {
        /** 
        This function will click on the New Patients + button from Nav-Bar.
        @return: None
        */
        newpt_menu_obj.clickonNewPt()
    }
}