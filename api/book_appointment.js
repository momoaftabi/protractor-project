var appointment_page_obj = require("../page_objects/common_pages/appointment_page.ob")

module.exports = {
    registered: (phone_Number) => {
        /**
         * This function is used to create appointment for registered patients
         * @param phone_Number: MANDATORY object
         *          This is used to enter phone number
         * @return: None
         */
         appointment_page_obj.forSearch(phone_Number)
         appointment_page_obj.selectPatient()
        appointment_page_obj.clickOnBookAppointmentBTN()
    },

    unregistered: (phone_Number, patient_Name, patient_Age) => {
        /**
         * This function is used to create appointment for unregistered patients
         * @param phone_Number: MANDATORY object
         *          This is used to enter phone number
         * @param patient_Name: MANDATORY object
         *          This is used to enter name
         * @param patient_Age: MANDATORY object
         *          This is used to enter age
         * @return: None
         */
        appointment_page_obj.inputPhoneNumber(phone_Number)
        appointment_page_obj.inputName(patient_Name)
        appointment_page_obj.inputAge(patient_Age)
        appointment_page_obj.selectBloodGroup()
        appointment_page_obj.selectGender()
        appointment_page_obj.clickOnBookAppointmentBTN()
    },

    slot: () => {
        /**
         * This function is used to click on slot
         * @return: None
         */
        appointment_page_obj.clickOnAppointmentBTN()
        appointment_page_obj.clickOnAddBTN()
        appointment_page_obj.selectSlot()
    },

    orgSwitch: () => {
        /**
         * This function is used to change the organization
         * @return: None
         */
        appointment_page_obj.switchOrganization()
        appointment_page_obj.clickOnAddBTN()
    }
}