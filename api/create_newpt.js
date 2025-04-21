var creatept_page_obj = require("../page_objects/common_pages/create_new_pt.ob")

module.exports = {
    createNewPt: function (name, phn, age, gender, bloodGroup, demography, email, father, mother, spouse, address) {
        /** 
        This function will register a new patient.
        @param ptname:  MANDATORY object
                This is used  to write patient name.
        @param phn:  MANDATORY object
                This is used  to write patient's phone number.
        @param age:  MANDATORY object
                This is used to write patient's age.
        @param gender:  MANDATORY object
                This is used to write patient's gender.
        @param bloodGroup:  MANDATORY object
                This is used to write patient's bloodGroup.
        @param demography:  MANDATORY object
                This is used to write patient's demography.
        @param email:  MANDATORY object
                This is used to write patient's email.
        @param father:  MANDATORY object
                This is used to write patient's father's name.
        @param mother:  MANDATORY object
                This is used to write patient's mother's name.
        @param spouse:  MANDATORY object
                This is used to write patient's spouse's name.
        @param address:  MANDATORY object
                This is used to write patient's address.
        @return: None
        */
        creatept_page_obj.enterName(name)
        creatept_page_obj.enterPhn(phn)
        creatept_page_obj.enterAge(age)
        creatept_page_obj.clickonGender(gender)
        creatept_page_obj.clickonBg(bloodGroup)
        creatept_page_obj.clickonDemo(demography)
        creatept_page_obj.clickonOccupation()
        creatept_page_obj.enterEmail(email)
        creatept_page_obj.enterFatherName(father)
        creatept_page_obj.enterMotherName(mother)
        creatept_page_obj.enterSpouseName(spouse)
        creatept_page_obj.enterAddress(address)
        creatept_page_obj.clickonSavePt()
    }
}