var config_page_obj = require("../page_objects/common_pages/v3_config_page.ob")

module.exports = {
    redirectToTemplatePage: () => {
        /**
         * This function is used to open the prescription template page
         * @return: None
         */
        config_page_obj.clickOnPrescriptionTemplateBTN()
    },

    jotnoPrescription: (margin_top, header_text, footer_text) => {
        /**
         * This function is used to input data for Jotno Prescription type
         * @param margin_top: MANDATORY object
         *      This is used to enter page margin top
         * @param header_text: MANDATORY object
         *      This is used to enter header text
         * @param footer_text: MANDATORY object
         *      This is used to enter footer text
         * @return: None
         */
        config_page_obj.inputInPageSectionForJotnoType(margin_top)
        config_page_obj.addHeader(header_text)
        config_page_obj.addFooter(footer_text)
    },

    doctorPrescription: (width, height) => {
        /**
         * This function is used to input data for doctor Prescription type
         * @param width: MANDATORY object
         *      This is used to enter page width
         * @param height: MANDATORY object
         *      This is used to enter page height
         * @return: None
         */
        config_page_obj.inputInPrescriptionSection()
        config_page_obj.inputInPageSectionForDoctorType(width, height)
    },

    default: (margin_left, margin_right, header_height, footer_height, content_left_width,
        content_left_margin_top, content_right_margin_top, content_left_margin_left,
        content_right_margin_left, font_size, info_margin_top, info_margin_left, info_label, qr_code_margin_top, qr_code_margin_left, 
        qr_code_text_font_size, qr_code_space,signature_margin_left, signature_text, complaint_text, complaint_margin_left, complaint_margin_top,
        complaint_margin_bottom, complaint_font_size, history_text, history_component_height,
        history_line_spacing, findings_text, findings_absolute_position_top,
        findings_absolute_position_left, investigation_text, investigation_margin_left,
        investigation_margin_top, investigation_margin_bottom, investigation_font_size, diagnosis_text,
        diagnosis_component_height, diagnosis_line_spacing, medication_text,
        medication_absolute_position_top, medication_absolute_position_left, eyeglass_text,
        eyeglass_margin_left, eyeglass_margin_top, eyeglass_margin_bottom,
        eyeglass_font_size, iop_text, iop_component_height, iop_line_spacing, advice_text,
        advice_absolute_position_top, advice_absolute_position_left, referral_text, referral_margin_left,
        referral_margin_top, referral_margin_bottom, referral_font_size, followUp_component_height,
        followUp_line_spacing) => {
        /**
         * This function is used to input data for all prescription types
         * @param margin_left: MANDATORY object
         *      This is used to enter margin left
         * @param margin_right: MANDATORY object
         *      This is used to enter margin right
         * @param header_height: MANDATORY object
         *      This is used to enter header height
         * @param footer_height: MANDATORY object
         *      This is used to enter footer height
         * @param content_left_width: MANDATORY object
         *      This is used to enter content left width
         * @param content_left_margin_top: MANDATORY object
         *      This is used to enter content left margin top
         * @param content_right_margin_top: MANDATORY object
         *      This is used to enter content right margin top
         * @param content_left_margin_left: MANDATORY object
         *      This is used to enter content left margin left
         * @param content_right_margin_left: MANDATORY object
         *      This is used to enter content right margin left
         * @param font_size: MANDATORY object
         *      This is used to enter font size
         * @param info_margin_top: MANDATORY object
         *      This is used to enter patient info margin top
         * @param info_margin_left: MANDATORY object
         *      This is used to enter patient info margin left
         * @param info_label: MANDATORY object
         *      This is used to enter patient info label
         * @param qr_code_margin_top: MANDATORY object
         *      This is used to enter QR code margin top
         * @param qr_code_margin_left: MANDATORY object
         *      This is used to enter QR code margin left  
         * @param qr_code_text_font_size: MANDATORY object
         *      This is used to enter QR code text font size
         * @param qr_code_space: MANDATORY object
         *      This is used to enter QR code space
         * @param signature_margin_left: MANDATORY object
         *      This is used to enter signature margin left
         * @param signature_text: MANDATORY object
         *      This is used to enter signature text
         * @param complaint_text: MANDATORY object
         *      This is used to enter complaint text
         * @param complaint_margin_left: MANDATORY object
         *      This is used to enter complaint margin left
         * @param complaint_margin_top: MANDATORY object
         *      This is used to enter complaint margin top
         * @param complaint_margin_bottom: MANDATORY object
         *      This is used to enter complaint margin bottom
         * @param complaint_font_size: MANDATORY object
         *      This is used to enter complaint font size
         * @param history_text: MANDATORY object
         *      This is used to enter history text
         * @param history_component_height: MANDATORY object
         *      This is used to enter history component height
         * @param history_line_spacing: MANDATORY object
         *      This is used to enter history line spacing
         * @param findings_text: MANDATORY object
         *      This is used to enter findings text
         * @param findings_absolute_position_top: MANDATORY object
         *      This is used to enter findings absolute position top
         * @param findings_absolute_position_left: MANDATORY object
         *      This is used to enter findings absolute position left
         * @param investigation_text: MANDATORY object
         *      This is used to enter investigation text
         * @param investigation_margin_left: MANDATORY object
         *      This is used to enter investigation margin left
         * @param investigation_margin_top: MANDATORY object
         *      This is used to enter investigation margin top
         * @param investigation_margin_bottom: MANDATORY object
         *      This is used to enter investigation margin bottom
         * @param investigation_font_size: MANDATORY object
         *      This is used to enter investigation font size
         * @param diagnosis_text: MANDATORY object
         *      This is used to enter diagnosis text
         * @param diagnosis_component_height: MANDATORY object
         *      This is used to enter diagnosis component height
         * @param diagnosis_line_spacing: MANDATORY object
         *      This is used to enter diagnosis line spacing
         * @param medication_text: MANDATORY object
         *      This is used to enter medication text
         * @param medication_absolute_position_top: MANDATORY object
         *      This is used to enter medication absolute position top
         * @param medication_absolute_position_left: MANDATORY object
         *      This is used to enter medication absolute position left
         * @param eyeglass_text: MANDATORY object
         *      This is used to enter eyeglass text
         * @param eyeglass_margin_left: MANDATORY object
         *      This is used to enter eyeglass margin left
         * @param eyeglass_margin_top: MANDATORY object
         *      This is used to enter eyeglass margin top
         * @param eyeglass_margin_bottom: MANDATORY object
         *      This is used to enter eyeglass margin bottom
         * @param eyeglass_font_size: MANDATORY object
         *      This is used to enter eyeglass font size
         * @param iop_text: MANDATORY object
         *      This is used to enter IOP text
         * @param iop_component_height: MANDATORY object
         *      This is used to enter IOP component height
         * @param iop_line_spacing: MANDATORY object
         *      This is used to enter IOP line spacing
         * @param advice_text: MANDATORY object 
         *      This is used to enter advice text
         * @param advice_absolute_position_top: MANDATORY object
         *      This is used to enter advice absolute position top
         * @param advice_absolute_position_left: MANDATORY object
         *      This is used to enter advice absolute position left
         * @param referral_text: MANDATORY object
         *      This is used to enter referral text
         * @param referral_margin_left: MANDATORY object
         *      This is used to enter referral margin left
         * @param referral_margin_top: MANDATORY object
         *      This is used to enter referral margin top
         * @param referral_margin_bottom: MANDATORY object
         *      This is used to enter referral margin bottom
         * @param referral_font_size: MANDATORY object
         *      This is used to enter referral font size
         * @param followUp_component_height: MANDATORY object
         *      This is used to enter followup component height
         * @param followUp_line_spacing: MANDATORY object
         *      This is used to enter followup line spacing
         * @return: None
         */
        config_page_obj.inputDefaultElementsInPageSection(margin_left, margin_right, header_height, footer_height);
        config_page_obj.inputInBodySection(content_left_width, content_left_margin_top, content_right_margin_top, content_left_margin_left, content_right_margin_left);
        config_page_obj.inputInPatientInfoSection(font_size, info_margin_top, info_margin_left, info_label);
        config_page_obj.inputInQRCodeSection(qr_code_margin_top, qr_code_margin_left, qr_code_text_font_size, qr_code_space);
        config_page_obj.inputInSignatureSection(signature_margin_left, signature_text);
        config_page_obj.inputInComplaintSection(complaint_text, complaint_margin_left, complaint_margin_top, complaint_margin_bottom, complaint_font_size);
        config_page_obj.inputInHistorySection(history_text, history_component_height, history_line_spacing);
        config_page_obj.inputInFindingsSection(findings_text, findings_absolute_position_top, findings_absolute_position_left);
        config_page_obj.inputInInvestigationSection(investigation_text, investigation_margin_left, investigation_margin_top, investigation_margin_bottom, investigation_font_size);
        config_page_obj.inputInDiagnosisSection(diagnosis_text, diagnosis_component_height, diagnosis_line_spacing);
        config_page_obj.inputInMedicationSection(medication_text, medication_absolute_position_top, medication_absolute_position_left);
        config_page_obj.inputInEyeglassSection(eyeglass_text, eyeglass_margin_left, eyeglass_margin_top, eyeglass_margin_bottom, eyeglass_font_size);
        config_page_obj.inputInIOPSection(iop_text, iop_component_height, iop_line_spacing);
        config_page_obj.inputInAdviceSection(advice_text, advice_absolute_position_top, advice_absolute_position_left);
        config_page_obj.inputInReferralSection(referral_text, referral_margin_left, referral_margin_top, referral_margin_bottom, referral_font_size);
        config_page_obj.inputInFollowUpSection(followUp_component_height, followUp_line_spacing);
    },

    preview: () => {
        /**
         * This function is used to click preview button
         * @return: None
         */
        config_page_obj.previewConfig()
    },
    Save: () => {
        /**
         * This function is used to click on save button
         * @return: None
         */
        config_page_obj.SaveConfig()
    }
}