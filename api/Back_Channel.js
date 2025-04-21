var back_channel_logIn_obj = require("../page_objects/common_pages/back_channel.ob")
module.exports=
{
    backChannelLoginInfo:function(docbmdc)
    {
         /** 
         * This function is used to create an access request of a doctor
        for back channel login
        *@param docbmdc: MANDATORY object
        * This is used to find doctor through bmdc
        * @return: None
        */
        
        back_channel_logIn_obj.clickOnDoctorSelect()
        back_channel_logIn_obj.clickOnCreateDocAccAccReq()
        back_channel_logIn_obj.clickOnSelectDocType()
        back_channel_logIn_obj.enterDocBMDC(docbmdc)
        back_channel_logIn_obj.clickOnSearch()
        back_channel_logIn_obj.clickOnSendAccessReq()
        back_channel_logIn_obj.clickOnDoctorAccAccessReq()
        back_channel_logIn_obj.clickOnDocApproval()
        back_channel_logIn_obj.clickOnSubmitButton()
        back_channel_logIn_obj.clickOnApprovalTab()
       
        },
        backChannelLogIn:function()
        { 
            /** 
             * This function is used for back channel login
             * @return: None
             */
            back_channel_logIn_obj.clickOnBackChannelLogIn()
        },
        approvedDocExp: function ()
        {
            /**
             * This function is used to expire the approved doctor
             * @return: None
             */
            back_channel_logIn_obj.backToParrentWindow()
            back_channel_logIn_obj.clickOnAppDocExp();
        }
}