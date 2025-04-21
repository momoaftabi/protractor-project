var signin_page_obj = require("../page_objects/common_pages/signin_page.ob")
module.exports = {
    docSignIn: function(username, passwd) {
        /** 
        This function will input username, password and click on Sign in button.

        @param userName:  MANDATORY object
                User name
        @param passwd:  MANDATORY object
                User Password
        @return: None
        */
        signin_page_obj.enterUserName(username)
        signin_page_obj.enterPassword(passwd)
        signin_page_obj.clickSignIn()
    },
    orgSignIn: function(username, userdOmain, passwd) {
        /** 
        This function sign in as an sqh user.
        @param username:  MANDATORY object
                This is used  to write user name.
        @param userdOmain:  MANDATORY object
                This is used  to write user domain (sqh/root).
        @param passwd:  MANDATORY object
                This is used  to write user password.
        @return: None
        */
        signin_page_obj.enterUserName(username)
        signin_page_obj.enterUserDomain(userdOmain)
        signin_page_obj.enterPassword(passwd)
        signin_page_obj.clickOrgSigninBTN()
    }
}