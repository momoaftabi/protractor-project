/* Create new user function */
var add_user_obj = require("../page_objects/common_pages/user_create_page.ob");
module.exports = {
    addUser: (new_userName, new_Password, new_fullName, new_designation, new_dateOfBirth,
        new_email, new_phoneNumber, new_presentAddress, new_permanentAddress) => {
        /**
         * This function is used to call all the functions from the user create object page
         * @param new_userName: MANDATORY object
         *          This is used to enter user name
         * @param new_Password: MANDATORY object
         *          This is used to enter password
         * @param new_fullName: MANDATORY object
         *          This is used to enter name
         * @param new_designation: MANDATORY object
         *          This is used to enter designation
         * @param new_dateOfBirth: MANDATORY object
         *          This is used to enter date of birth
         * @param new_email: MANDATORY object
         *          This is used to enter email address
         * @param new_phoneNumber: MANDATORY object
         *          This is used to enter phone number
         * @param new_presentAddress: MANDATORY object
         *          This is used to enter present address
         * @param new_permanentAddress: MANDATORY object
         *          This is used to enter permanent address
         * @return: None
         */
        add_user_obj.clickUserAccBTN()
        add_user_obj.clickAddNewBTN()
        add_user_obj.inputUserName(new_userName)
        add_user_obj.inputPass(new_Password)
        add_user_obj.inputFullName(new_fullName)
        add_user_obj.inputDesignation(new_designation)
        add_user_obj.inputDateOfBirth(new_dateOfBirth)
        add_user_obj.selectGender()
        add_user_obj.inputEmail(new_email)
        add_user_obj.inputPhoneNumber(new_phoneNumber)
        add_user_obj.inputPresentAddress(new_presentAddress)
        add_user_obj.inputPermanentAddress(new_permanentAddress)
        add_user_obj.selectRoles()
        add_user_obj.clickSaveFormDataBTN()
    }
};