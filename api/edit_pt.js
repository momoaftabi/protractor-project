var pt_edit_obj = require("../page_objects/common_pages/edit_pt.ob")
var creatept_page_obj = require("../page_objects/common_pages/create_new_pt.ob")
module.exports = {
    editPt: function (editedname,editedaddress) {
        /** 
        This function will edit patient details.
        @param editedname:  MANDATORY object
                This is used to edit patient's name.
        @param editedaddress:  MANDATORY object
                This is used to edit patient's address.
        @return: None
        */
        pt_edit_obj.clickonEditProfile()
        pt_edit_obj.enterEditedName(editedname)
        pt_edit_obj.enterEditedAddress(editedaddress)
        creatept_page_obj.clickonSavePt()
    }
}