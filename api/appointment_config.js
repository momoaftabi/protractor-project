var appointment_config_page_obj = require("../page_objects/common_pages/appointment_config_page.ob")

module.exports = {
    generalSlot: (designation, timePerPatient, waitingSize, phoneNumber, fee, followupFee, reportFee) => {
        /**
         * This function is used to save configurations for general tab
         * @param designation: MANDATORY object
         *          This is used to enter designation
         * @param timePerPatient: MANDATORY object
         *          This is used to enter time per patient
         * @param waitingSize: MANDATORY object
         *          This is used to enter waiting size
         * @param phoneNumber: MANDATORY object
         *          This is used to enter phone number
         * @param fee: MANDATORY object
         *          This is used to enter fees
         * @param followupFee: MANDATORY object
         *          This is used to enter follow up fees
         * @param reportFee: MANDATORY object
         *          This is used to enter report fees
         * @return: None
         */
        appointment_config_page_obj.clickOnAppointmentConfigurationBTN()
        appointment_config_page_obj.inputInGeneralTabSlot(designation, timePerPatient, waitingSize, phoneNumber, fee,
            followupFee, reportFee)
    },
    generalSerial:  (designation, timePerPatient, waitingSize, phoneNumber, fee, followupFee, reportFee) => {
        /**
         * This function is used to save configurations for general tab
         * @param designation: MANDATORY object
         *          This is used to enter designation
         * @param timePerPatient: MANDATORY object
         *          This is used to enter time per patient
         * @param phoneNumber: MANDATORY object
         *          This is used to enter phone number
         * @param waitingSize: MANDATORY object
         *          This is used to enter waiting size
         * @param fee: MANDATORY object
         *          This is used to enter fees
         * @param followupFee: MANDATORY object
         *          This is used to enter follow up fees
         * @param reportFee: MANDATORY object
         *          This is used to enter report fees
         * @return: None
         */
        appointment_config_page_obj.clickOnAppointmentConfigurationBTN()
        appointment_config_page_obj.inputInGeneralTabSerial(designation, timePerPatient, waitingSize, phoneNumber, fee,
            followupFee, reportFee)
    },

    doctorSchedule: (startTimeSaturday, endTimeSaturday) => {
        /**
         * This function is used to add doctor schedule
         * @param startTimeSaturday: MANDATORY object
         *          This is used to add Saturday start time
         * @param endTimeSaturday: MANDATORY object
         *          This is used to enter Saturday end time
         * @return: None
         */
        appointment_config_page_obj.inputInScheduleTab(startTimeSaturday, endTimeSaturday)
    },
    orgSwitch: () => {
        /**
         * This function is used to change the organization
         * @return: None
         */
         appointment_config_page_obj.switchOrg()
    }
}