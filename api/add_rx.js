var add_rx_obj = require("../page_objects/common_pages/add_rx.ob")
module.exports = {
    addRx: () =>{
        /**
        This function will click on the + Add Prescription button.
        @return: None
        */
        add_rx_obj.clickonAddRx()
    }
}