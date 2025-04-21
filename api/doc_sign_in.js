var signin_page_obj = require("../page_objects/common_pages/doc_signin_page.ob")
module.exports= {
     docSignIn: function (username,doctype,passwd) {
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
        if (doctype === 'medical'){
            signin_page_obj.typeMedical()
        }
        else{
            signin_page_obj.typeDental()
        }
        signin_page_obj.clickSignIn()

    },
}