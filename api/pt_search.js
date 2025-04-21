var pt_search_obj = require("../page_objects/common_pages/pt_search.ob")
module.exports = {
    searchPt: function (name) {
        /** 
        This function will input patient's name and see details of the patient.
        @param name:  MANDATORY object
                This is used to write patient's name.
        @return: None
        */
        pt_search_obj.enterSearchPt(name)
        pt_search_obj.clickonViewDetails()

    }
}