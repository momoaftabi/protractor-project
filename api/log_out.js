var logout_page_obj = require("../page_objects/common_pages/log_out_page.ob")

module.exports = {
    docLogOut: () => {
        /**
         * This function will click on Log out button
         * @return: None
         */
        logout_page_obj.clickOnDocProfileName()
        logout_page_obj.clickOnLogOutBTN()
    },

    orgLogOut: () => {
        /**
         * This function will click on Log out button
         * @return: None
         */
        logout_page_obj.clickOnOrgProfileName()
        logout_page_obj.clickOnLogOutBTN()
    }
}