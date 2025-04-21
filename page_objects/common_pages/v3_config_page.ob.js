/*This is the collection of Prescription template page objects*/

var until = protractor.ExpectedConditions
var key = protractor.Key
 var v3= {
    moreBTN: element(by.id('more-dropdown')),
    templateBTN: element(by.id('prescription-template-nav-link')),

    // Prescription section elements
    typeDropdown: element(by.id('prescription_type')).element(by.css('option[value="DOCTOR_PRESCRIPTION"]')),
    prescription: element(by.css('#Prescription a')),
    defaultViewDropdown: element(by.id('default_view')).element(by.css('option[value="DOCTOR_PRESCRIPTION"]')),

    // Page section elements
    pageTab: $('#Page a'),
    pageWidth: element(by.id('pageSizeWidth')),
    pageHeight: element(by.id('pageSizeHeight')),
    pageMarginTop: element(by.id('pageMarginTop')),
    pageMarginLeft: element(by.id('pageMarginLeft')),
    pageMarginRight: element(by.id('pageMarginRight')),
    pageHeaderHeight: element(by.id('headerHeight')),
    pageFooterHeight: element(by.id('footerHeight')),

    // Header content section elements
    headerTab: $('#HeaderContent a'),
    addHeaderRowBTN: element(by.id('AddHeaderRow')),
    addHeaderColumnBTN: element(by.id('addHeaderColumn')),
    headerText: $('#headerColumnInfo div:nth-child(2) div:nth-child(1)'),
    // Footer content section elements
    footerTab: $('#FooterContent a'),
    addFooterRowBTN: element(by.id('AddFooterRow')),
    addFooterColumnBTN: element(by.id('addFooterColumn')),
    footerText: $('#footerColumnInfo div:nth-child(2) div:nth-child(1)'),

    // Body section elements
    bodyTab: $('#Body a'),
    bodyContentLeftWidth: element(by.id('bodyContentLeft')),
    bodyContentLeftMarginTop: element(by.id('bodyContentLeftMarginTop')),
    bodyContentRightMarginTop: element(by.id('bodyContentRightMarginTop')),
    bodyContentLeftMarginLeft: element(by.id('bodyContentLeftMarginLeft')),
    bodyContentRightMarginLeft: element(by.id('bodyContentRightMarginLeft')),
    bodyContentLeftComponent: element(by.id('bodyContentLeftComponent')),
    bodyLeftComponentAllSelect: element(by.css('#bodyContentLeftComponent .ui-multiselect .ui-multiselect-panel .ui-widget-header .ui-chkbox')),
    leftComponentDropdown: $$('#bodyContentLeftComponent div:nth-child(4) ul li'),
    bodyContentRightComponent: element(by.id('bodyContentRightComponent')),
    bodyRightComponentAllSelect: element(by.css('#bodyContentRightComponent .ui-multiselect .ui-multiselect-panel .ui-widget-header .ui-chkbox')),
    rightComponentDropdown: $$('#bodyContentRightComponent div:nth-child(4) ul li'),

    // Patient info section elements
    patientInfoTab: $('#PatientInfo a'),
    addSectionBTN: element(by.id('onAddPatientInfo')),
    informationDropdown: element.all(by.id('patient_section')).get(0),
    selectInformation: $$('#patient_section li').get(0),
    infoFontSize: element.all(by.id('patient_section_FontSize')).get(0),
    infoMarginTop: element.all(by.id('patient_section_MarginTop')).get(0),
    infoMarginLeft: element.all(by.id('patient_section_MarginLeft')).get(0),
    infoBold: element(by.id('patient_section_bold')),
    infoLabel: element.all(by.id('patient_section_label')).get(0),
    
    // QR code section elements
    qrCodeTab: $('#QRCode a'),
    qrCodeMarginTop: element(by.id('qrCodeMarginTop')),
    qrCodeMarginLeft: element(by.id('qrCodeMarginLeft')),
    qrCodeTextFontSize: element(by.id('qrCodeTextFontSize')),
    qrCodeSpace: element(by.id('qrCodeSpace')),

    // Signature section elements
    signatureTab: $('#Signature a'),
    signatureMarginLeft: element(by.id('signatureMarginLeft')),
    signatureText: $('#signatureDetails div:nth-child(2) div:nth-child(1)'),

    // Complaint section elements
    complaintTab: $('#Complaint a'),
    complaintText: $('#complaintHeaderDetails div:nth-child(2) div:nth-child(1)'),
    complaintMarginLeft: element(by.id('complaintMarginLeft')),
    complaintMarginTop: element(by.id('complaintMarginTop')),
    complaintMarginBottom: element(by.id('complaintMarginBottom')),
    complaintContentFontSize: element(by.id('complaintContentFontSize')),

    // History section elements
    historyTab: $('#History a'),
    historyText: $('#historyHeaderDetails div:nth-child(2) div:nth-child(1)'),
    historyHeight: element(by.id('historyHeight')),
    historyLineHeight: element(by.id('historyLineHeight')),

    // Findings section elements
    findingsTab: $('#Findings a'),
    findingsText: $('#findingsHeaderDetails div:nth-child(2) div:nth-child(1)'),
    findingsAbsolutePositionTop: element(by.id('findingsAbsolutePositionTop')),
    findingsAbsolutePositionLeft: element(by.id('findingsAbsolutePositionLeft')),

    // Investigation section elements
    investigationTab: $('#Investigation a'),
    investigationText: $('#investigationHeaderDetails div:nth-child(2) div:nth-child(1)'),
    investigationMarginLeft: element(by.id('investigationMarginLeft')),
    investigationMarginTop: element(by.id('investigationMarginTop')),
    investigationMarginBottom: element(by.id('investigationMarginBottom')),
    investigationContentFontSize: element(by.id('investigationContentFontSize')),

    // Diagnosis section elements
    diagnosisTab: $('#Diagnosis a'),
    diagnosisText: $('#diagnosisHeaderDetails div:nth-child(2) div:nth-child(1)'),
    diagnosisHeight: element(by.id('diagnosisHeight')),
    diagnosisLineHeight: element(by.id('diagnosisLineHeight')),

    // Medication section elements
    medicationTab: $('#Medication a'),
    medicationText: $('#medicationHeaderDetails div:nth-child(2) div:nth-child(1)'),
    medicationView: element(by.id('medication_view')).element(by.css('option[value="LIST"]')),
    medicationAbsolutePositionTop: element(by.id('medicationAbsolutePositionTop')),
    medicationAbsolutePositionLeft: element(by.id('medicationAbsolutePositionLeft')),

    // Eyeglass section elements
    eyeglassTab: $('#Eyeglass a'),
    eyeglassText: $('#eyeglassHeaderDetails div:nth-child(2) div:nth-child(1)'),
    eyeglassMarginLeft: element(by.id('eyeglassMarginLeft')),
    eyeglassMarginTop: element(by.id('eyeglassMarginTop')),
    eyeglassMarginBottom: element(by.id('eyeglassMarginBottom')),
    eyeglassContentFontSize: element(by.id('eyeglassContentFontSize')),

    // IOP section elements
    IOPTab: $('#IOP a'),
    IOPText: $('#iopHeaderDetails div:nth-child(2) div:nth-child(1)'),
    iopHeight: element(by.id('iopHeight')),
    iopLineHeight: element(by.id('iopLineHeight')),

    // Advice section elements
    adviceTab: $('#Advice a'),
    adviceText: $('#adviceHeaderDetails div:nth-child(2) div:nth-child(1)'),
    adviceAbsolutePositionTop: element(by.id('adviceAbsolutePositionTop')),
    adviceAbsolutePositionLeft: element(by.id('adviceAbsolutePositionLeft')),

    // Referral section elements
    referralTab: $('#Referral a'),
    referralText: $('#referralHeaderDetails div:nth-child(2) div:nth-child(1)'),
    referralMarginLeft: element(by.id('referralMarginLeft')),
    referralMarginTop: element(by.id('referralMarginTop')),
    referralMarginBottom: element(by.id('referralMarginBottom')),
    referralContentFontSize: element(by.id('referralContentFontSize')),

    // FollowUp section elements
    followUpTab: $('#FollowUp a'),
    followUpText: $('#followupHeaderDetails div:nth-child(2) div:nth-child(1)'),
    followupHeight: element(by.id('followupHeight')),
    followupLineHeight: element(by.id('followupLineHeight')),

    // Preview and Save elements
    preview: element(by.id('Preview')),
    save: element(by.id('Save')),

    //check prescription type
    pres_type1 :  element(by.id('prescription_type')).element(by.css('option[value="JOTNO_PRESCRIPTION"]')),
    pres_type2 :  element(by.id('prescription_type')).element(by.css('option[value="DOCTOR_PRESCRIPTION"]'))
}

module.exports = {
    clickOnPrescriptionTemplateBTN: function() {
        /**
         * This function is used to open the prescription template page
         * @return: None
         */
        browser.wait(until.presenceOf(v3.moreBTN), 20000, "More button not found within timeout")
        v3.moreBTN.click()
        browser.sleep(5100)
        browser.wait(until.presenceOf(v3.templateBTN), 20000, "Prescription template button not found within timeout")
        v3.templateBTN.click()
        browser.sleep(10000)
    },

    inputInPrescriptionSection: function() {
        /**
         * This function is used to input data in Prescription section
         * @return: None
         */
        browser.wait(until.presenceOf(v3.typeDropdown), 20000, "Prescription type dropdown not found within timeout")
        v3.typeDropdown.click()
        browser.wait(until.presenceOf(v3.prescription), 20000, "prescription tab is not open")
        v3.prescription.click()
        browser.wait(until.presenceOf(v3.defaultViewDropdown), 20000, "Prescription default view dropdown not found within timeout")
        v3.defaultViewDropdown.click()
    },

    inputInPageSectionForJotnoType: function(margin_top) {
        /**
         * This function is used to input data in Page section for Jotno Prescription type
         * @param margin_top: MANDATORY object
         *      This is used to enter page margin top
         * @return: None
         */
        browser.wait(until.presenceOf(v3.pageTab), 20000, "Page tab not found within timeout")
        v3.pageTab.click()
        browser.wait(until.presenceOf(v3.pageMarginTop), 30000, "Page margin top field not found within timeout")
        v3.pageMarginTop.clear().sendKeys(margin_top)
    },

    inputInPageSectionForDoctorType: function(width, height) {
        /**
         * This function is used to input data in Page section for Doctor Prescription type
         * @param width: MANDATORY object
         *      This is used to enter page width
         * @param height: MANDATORY object
         *      This is used to enter page height
         * @return: None
         */
        browser.wait(until.presenceOf(v3.pageTab), 20000, "Page tab not found within timeout")
        v3.pageTab.click()
        browser.wait(until.presenceOf(v3.pageWidth), 20000, "Page size width field not found within timeout")
        v3.pageWidth.clear().sendKeys(width)
        browser.wait(until.presenceOf(v3.pageHeight), 20000, "Page size height field not found within timeout")
        v3.pageHeight.clear().sendKeys(height)
    },

    inputDefaultElementsInPageSection: function(margin_left, margin_right, header_height, footer_height) {
        /**
         * This function is used to input default data in Page section
         * @param margin_left: MANDATORY object
         *      This is used to enter margin left
         * @param margin_right: MANDATORY object
         *      This is used to enter margin right
         * @param header_height: MANDATORY object
         *      This is used to enter header height
         * @param footer_height: MANDATORY object
         *      This is used to enter footer height
         * @return: None
         */
        
        browser.wait(until.presenceOf(v3.pageMarginLeft), 30000, "Page margin left field not found within timeout")
        v3.pageMarginLeft.clear().sendKeys(margin_left)
        browser.wait(until.presenceOf(v3.pageMarginRight), 30000, "Page margin right field not found within timeout")
        v3.pageMarginRight.clear().sendKeys(margin_right)
        browser.wait(until.presenceOf(v3.pageHeaderHeight), 30000, "Page header height field not found within timeout")
        v3.pageHeaderHeight.clear().sendKeys(header_height)
        browser.wait(until.presenceOf(v3.pageFooterHeight), 30000, "Page footer height field not found within timeout")
        v3.pageFooterHeight.clear().sendKeys(footer_height)
    },

    addHeader: function(header_text) {
        /**
         * This function is used to input data in Header section
         * @param header_text: MANDATORY object
         *      This is used to enter header text
         * @return: None
         */
        browser.wait(until.presenceOf(v3.headerTab), 20000, "Header tab not found within timeout")
        v3.headerTab.click()
        browser.wait(until.presenceOf(v3.addHeaderRowBTN), 20000, "Add header row button not found within timeout")
        v3.addHeaderRowBTN.click()
        browser.wait(until.presenceOf(v3.addHeaderColumnBTN), 20000, "Add header column button not found within timeout")
        v3.addHeaderColumnBTN.click()
        browser.wait(until.presenceOf(v3.headerText), 20000, "Header text box not found within timeout")
        v3.headerText.clear().sendKeys(header_text)
    },

    addFooter: function(footer_text) {
        /**
         * This function is used to input data in Header section
         * @param footer_text: MANDATORY object
         *      This is used to enter footer text
         * @return: None
         */
        browser.wait(until.presenceOf(v3.footerTab), 20000, "Footer tab not found within timeout")
        v3.footerTab.click()
        browser.wait(until.presenceOf(v3.addFooterRowBTN), 20000, "Add footer row button not found within timeout")
        v3.addFooterRowBTN.click()
        browser.wait(until.presenceOf(v3.addFooterColumnBTN), 20000, "Add footer column button not found within timeout")
        v3.addFooterColumnBTN.click()
        browser.wait(until.presenceOf(v3.footerText), 20000, "Footer text box not found within timeout")
        v3.footerText.clear().sendKeys(footer_text)
    },

    inputInBodySection: function(content_left_width, content_left_margin_top, content_right_margin_top,
        content_left_margin_left, content_right_margin_left) {
        /**
         * This function is used to input data in Body section
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
         * @return: None
         */
        browser.wait(until.presenceOf(v3.bodyTab), 20000, "Body tab not found within timeout")
        v3.bodyTab.click()
        browser.wait(until.presenceOf(v3.bodyContentLeftWidth), 20000, "Body content left (Width) field not found within timeout")
        v3.bodyContentLeftWidth.clear().sendKeys(content_left_width)
        browser.wait(until.presenceOf(v3.bodyContentLeftMarginTop), 20000, "Body content left (Margin Top) field not found within timeout")
        v3.bodyContentLeftMarginTop.clear().sendKeys(content_left_margin_top)
        browser.wait(until.presenceOf(v3.bodyContentRightMarginTop), 20000, "Body content right (Margin Top) field not found within timeout")
        v3.bodyContentRightMarginTop.clear().sendKeys(content_right_margin_top)
        browser.wait(until.presenceOf(v3.bodyContentLeftMarginLeft), 20000, "Body content left (Margin Left) field not found within timeout")
        v3.bodyContentLeftMarginLeft.clear().sendKeys(content_left_margin_left)
        browser.wait(until.presenceOf(v3.bodyContentRightMarginLeft), 20000, "Body content right (Margin Left) field not found within timeout")
        v3.bodyContentRightMarginLeft.clear().sendKeys(content_right_margin_left)
        browser.wait(until.elementToBeClickable(v3.bodyContentLeftComponent), 20000, "Component body content left dropdown not found not found within timeout")
        v3.bodyContentLeftComponent.click();
        browser.wait(until.elementToBeClickable(v3.bodyLeftComponentAllSelect), 20000, "All the left element not clicked within timeout")
       v3.bodyLeftComponentAllSelect.click();
       browser.sleep(100);
       v3.bodyLeftComponentAllSelect.click();
        v3.leftComponentDropdown.count().then(function(count) {
            browser.wait(until.presenceOf(v3.leftComponentDropdown), 20000, "Left components not found not found within timeout")
            for (var i = 0; i < count - 6; i++) {
                v3.leftComponentDropdown.get(i).click()
            }
        })
        browser.wait(until.elementToBeClickable(v3.bodyContentRightComponent), 20000, "Component body content right dropdown not found not found within timeout")
        v3.bodyContentRightComponent.click();
        browser.wait(until.elementToBeClickable(v3.bodyRightComponentAllSelect), 20000, "All the Right element not clicked within timeout")
      v3.bodyRightComponentAllSelect.click();
      browser.sleep(100);
      v3.bodyRightComponentAllSelect.click();
        v3.rightComponentDropdown.count().then(function(count) {
            browser.wait(until.presenceOf(v3.rightComponentDropdown), 20000, "Right components not found not found within timeout")
            for (var i = 6; i < count; i++) {
                v3.rightComponentDropdown.get(i).click()
            }
        })
    },

    inputInPatientInfoSection: function(font_size, info_margin_top, info_margin_left, info_label) {
        /**
         * This function is used to input data in Patient info section
         * @param font_size: MANDATORY object
         *      This is used to enter font size
         * @param info_margin_top: MANDATORY object
         *      This is used to enter patient info margin top
         * @param info_margin_left: MANDATORY object
         *      This is used to enter patient info margin left
         * @param info_label: MANDATORY object
         *      This is used to enter patient info label
         * @return: None
         */
        browser.wait(until.elementToBeClickable(v3.patientInfoTab), 20000, "Patient info tab not found within timeout")
        v3.patientInfoTab.click()
        browser.wait(until.elementToBeClickable(v3.addSectionBTN), 20000, "Add section button not found within timeout")
        v3.addSectionBTN.click()
        browser.wait(until.elementToBeClickable(v3.informationDropdown), 20000, "Information dropdown not found within timeout")
        v3.informationDropdown.click()
        browser.wait(until.elementToBeClickable(v3.selectInformation), 20000, "Name component not found within timeout")
        v3.selectInformation.click()
        browser.sleep(100)
        v3.selectInformation.click();
        browser.wait(until.presenceOf(v3.infoFontSize), 20000, "Font size field not found within timeout")
        v3.infoFontSize.clear().sendKeys(font_size)
        browser.wait(until.presenceOf(v3.infoMarginTop), 20000, "Margin top field not found within timeout")
        v3.infoMarginTop.clear().sendKeys(info_margin_top)
        browser.wait(until.presenceOf(v3.infoMarginLeft), 20000, "Margin left field not found within timeout")
        v3.infoMarginLeft.clear().sendKeys(info_margin_left)
        browser.wait(until.elementToBeClickable(v3.infoBold), 20000, "Bold component not found within timeout")
        v3.infoBold.click()
        browser.wait(until.presenceOf(v3.infoLabel), 20000, "Information label field not found within timeout")
        v3.infoLabel.clear().sendKeys(info_label)
 },

    inputInQRCodeSection: function(qr_code_margin_top, qr_code_margin_left, qr_code_text_font_size,
        qr_code_space) {
        /**
         * This function is used to input data in QR Code section
         * @param qr_code_margin_top: MANDATORY object
         *      This is used to enter QR code margin top
         * @param qr_code_margin_left: MANDATORY object
         *      This is used to enter QR code margin left  
         * @param qr_code_text_font_size: MANDATORY object
         *      This is used to enter QR code text font size
         * @param qr_code_space: MANDATORY object
         *      This is used to enter QR code space
         * @return: None
         */
        browser.wait(until.presenceOf(v3.qrCodeTab), 20000, "QR code tab not found within timeout")
        v3.qrCodeTab.click()
        browser.wait(until.presenceOf(v3.qrCodeMarginTop), 20000, "Margin top field not found within timeout")
        v3.qrCodeMarginTop.clear().sendKeys(qr_code_margin_top)
        browser.wait(until.presenceOf(v3.qrCodeMarginLeft), 20000, "Margin left field not found within timeout")
        v3.qrCodeMarginLeft.clear().sendKeys(qr_code_margin_left)
        browser.wait(until.presenceOf(v3.qrCodeTextFontSize), 20000, "Font size field not found within timeout")
        v3.qrCodeTextFontSize.clear().sendKeys(qr_code_text_font_size)
        browser.wait(until.presenceOf(v3.qrCodeSpace), 20000, "Code space field not found within timeout")
        v3.qrCodeSpace.clear().sendKeys(qr_code_space)
    },

    inputInSignatureSection: function(signature_margin_left, signature_text) {
        /**
         * This function is used to input data in Signature section
         * @param signature_margin_left: MANDATORY object
         *      This is used to enter signature margin left
         * @param signature_text: MANDATORY object
         *      This is used to enter signature text
         * @return: None
         */
        browser.wait(until.presenceOf(v3.signatureTab), 20000, "Signature tab not found within timeout")
        v3.signatureTab.click()
        browser.wait(until.presenceOf(v3.signatureMarginLeft), 20000, "Margin left field not found within timeout")
        v3.signatureMarginLeft.clear().sendKeys(signature_margin_left)
        browser.wait(until.presenceOf(v3.signatureText), 20000, "Text box not found within timeout")
        v3.signatureText.clear().sendKeys(key.SHIFT, key.END, key.BACK_SPACE, key.SHIFT, signature_text)
    },

    inputInComplaintSection: function(complaint_text, complaint_margin_left, complaint_margin_top,
        complaint_margin_bottom, complaint_font_size) {
        /**
         * This function is used to input data in Complaint section
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
         * @return: None
         */
        browser.wait(until.presenceOf(v3.complaintTab), 20000, "Complaint tab not found within timeout")
        v3.complaintTab.click()
        browser.wait(until.presenceOf(v3.complaintText), 20000, "Text box not found within timeout")
        v3.complaintText.clear().sendKeys(key.SHIFT, key.END, key.BACK_SPACE, key.SHIFT, complaint_text)
        browser.wait(until.presenceOf(v3.complaintMarginLeft), 20000, "Margin left field not found within timeout")
        v3.complaintMarginLeft.clear().sendKeys(complaint_margin_left)
        browser.wait(until.presenceOf(v3.complaintMarginTop), 20000, "Margin top field not found within timeout")
        v3.complaintMarginTop.clear().sendKeys(complaint_margin_top)
        browser.wait(until.presenceOf(v3.complaintMarginBottom), 20000, "Margin bottom field not found within timeout")
        v3.complaintMarginBottom.clear().sendKeys(complaint_margin_bottom)
        browser.wait(until.presenceOf(v3.complaintContentFontSize), 20000, "Font size field not found within timeout")
        v3.complaintContentFontSize.clear().sendKeys(complaint_font_size)
    },

    inputInHistorySection: function(history_text, history_component_height, history_line_spacing) {
        /**
         * This function is used to input data in History section
         * @param history_text: MANDATORY object
         *      This is used to enter history text
         * @param history_component_height: MANDATORY object
         *      This is used to enter history component height
         * @param history_line_spacing: MANDATORY object
         *      This is used to enter history line spacing
         * @return: None
         */
        browser.wait(until.presenceOf(v3.historyTab), 20000, "History tab not found within timeout")
        v3.historyTab.click()
        browser.wait(until.presenceOf(v3.historyText), 20000, "Text box not found within timeout")
        v3.historyText.clear().sendKeys(key.SHIFT, key.END, key.BACK_SPACE, key.SHIFT, history_text)
        browser.wait(until.presenceOf(v3.historyHeight), 20000, "Component height field not found within timeout")
        v3.historyHeight.clear().sendKeys(history_component_height)
        browser.wait(until.presenceOf(v3.historyLineHeight), 20000, "Line spacing field not found within timeout")
        v3.historyLineHeight.clear().sendKeys(history_line_spacing)
    },

    inputInFindingsSection: function(findings_text, findings_absolute_position_top,
        findings_absolute_position_left) {
        /**
         * This function is used to input data in Findings section
         * @param findings_text: MANDATORY object
         *      This is used to enter findings text
         * @param findings_absolute_position_top: MANDATORY object
         *      This is used to enter findings absolute position top
         * @param findings_absolute_position_left: MANDATORY object
         *      This is used to enter findings absolute position left
         * @return: None
         */
        browser.wait(until.presenceOf(v3.findingsTab), 20000, "Findings tab not found within timeout")
        v3.findingsTab.click()
        browser.wait(until.presenceOf(v3.findingsText), 20000, "Text box not found within timeout")
        v3.findingsText.clear().sendKeys(key.SHIFT, key.END, key.BACK_SPACE, key.SHIFT, findings_text)
        browser.wait(until.presenceOf(v3.findingsAbsolutePositionTop), 20000, "Absolute position top field not found within timeout")
        v3.findingsAbsolutePositionTop.clear().sendKeys(findings_absolute_position_top)
        browser.wait(until.presenceOf(v3.findingsAbsolutePositionLeft), 20000, "Absolute position left field not found within timeout")
        v3.findingsAbsolutePositionLeft.clear().sendKeys(findings_absolute_position_left)
    },

    inputInInvestigationSection: function(investigation_text, investigation_margin_left,
        investigation_margin_top, investigation_margin_bottom, investigation_font_size) {
        /**
         * This function is used to input data in Investigation section
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
         * @return: None
         */
        browser.wait(until.presenceOf(v3.investigationTab), 20000, "Investigation tab not found within timeout")
        v3.investigationTab.click()
        browser.wait(until.presenceOf(v3.investigationText), 20000, "Text box not found within timeout")
        v3.investigationText.clear().sendKeys(key.SHIFT, key.END, key.BACK_SPACE, key.SHIFT, investigation_text)
        browser.wait(until.presenceOf(v3.investigationMarginLeft), 20000, "Margin left field not found within timeout")
        v3.investigationMarginLeft.clear().sendKeys(investigation_margin_left)
        browser.wait(until.presenceOf(v3.investigationMarginTop), 20000, "Margin top field not found within timeout")
        v3.investigationMarginTop.clear().sendKeys(investigation_margin_top)
        browser.wait(until.presenceOf(v3.investigationMarginBottom), 20000, "Margin bottom field not found within timeout")
        v3.investigationMarginBottom.clear().sendKeys(investigation_margin_bottom)
        browser.wait(until.presenceOf(v3.investigationContentFontSize), 20000, "Font size field not found within timeout")
        v3.investigationContentFontSize.clear().sendKeys(investigation_font_size)
    },

    inputInDiagnosisSection: function(diagnosis_text, diagnosis_component_height, diagnosis_line_spacing) {
        /**
         * This function is used to input data in Diagnosis section
         * @param diagnosis_text: MANDATORY object
         *      This is used to enter diagnosis text
         * @param diagnosis_component_height: MANDATORY object
         *      This is used to enter diagnosis component height
         * @param diagnosis_line_spacing: MANDATORY object
         *      This is used to enter diagnosis line spacing
         * @return: None
         */
        browser.wait(until.presenceOf(v3.diagnosisTab), 20000, "Diagnosis tab not found within timeout")
        v3.diagnosisTab.click()
        browser.wait(until.presenceOf(v3.diagnosisText), 20000, "Text box not found within timeout")
        v3.diagnosisText.sendKeys(key.SHIFT, key.END, key.BACK_SPACE, key.SHIFT, diagnosis_text)
        browser.wait(until.presenceOf(v3.diagnosisHeight), 20000, "Component height field not found within timeout")
        v3.diagnosisHeight.clear().sendKeys(diagnosis_component_height)
        browser.wait(until.presenceOf(v3.diagnosisLineHeight), 20000, "Line spacing field not found within timeout")
        v3.diagnosisLineHeight.clear().sendKeys(diagnosis_line_spacing)
    },

    inputInMedicationSection: function(medication_text, medication_absolute_position_top,
        medication_absolute_position_left) {
        /**
         * This function is used to input data in Medication section
         * @param medication_text: MANDATORY object
         *      This is used to enter medication text
         * @param medication_absolute_position_top: MANDATORY object
         *      This is used to enter medication absolute position top
         * @param medication_absolute_position_left: MANDATORY object
         *      This is used to enter medication absolute position left
         * @return: None
         */
        browser.wait(until.presenceOf(v3.medicationTab), 20000, "Medication tab not found within timeout")
        v3.medicationTab.click()
        browser.wait(until.presenceOf(v3.medicationText), 20000, "Text box not found within timeout")
        v3.medicationText.sendKeys(key.SHIFT, key.END, key.BACK_SPACE, key.SHIFT, medication_text)
        browser.wait(until.presenceOf(v3.medicationView), 20000, "Medication view dropdown not found within timeout")
        v3.medicationView.click()
        browser.wait(until.presenceOf(v3.medicationAbsolutePositionTop), 20000, "Absolute position top field not found within timeout")
        v3.medicationAbsolutePositionTop.clear().sendKeys(medication_absolute_position_top)
        browser.wait(until.presenceOf(v3.medicationAbsolutePositionLeft), 20000, "Absolute position left field not found within timeout")
        v3.medicationAbsolutePositionLeft.clear().sendKeys(medication_absolute_position_left)
    },

    inputInEyeglassSection: function(eyeglass_text, eyeglass_margin_left, eyeglass_margin_top,
        eyeglass_margin_bottom, eyeglass_font_size) {
        /**
         * This function is used to input data in Eyeglass section
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
         * @return: None
         */
        browser.wait(until.presenceOf(v3.eyeglassTab), 20000, "Eyeglass tab not found within timeout")
        v3.eyeglassTab.click()
        browser.wait(until.presenceOf(v3.eyeglassText), 20000, "Text box not found within timeout")
        v3.eyeglassText.sendKeys(key.SHIFT, key.END, key.BACK_SPACE, key.SHIFT, eyeglass_text)
        browser.wait(until.presenceOf(v3.eyeglassMarginLeft), 20000, "Margin left field not found within timeout")
        v3.eyeglassMarginLeft.clear().sendKeys(eyeglass_margin_left)
        browser.wait(until.presenceOf(v3.eyeglassMarginTop), 20000, "Margin top field not found within timeout")
        v3.eyeglassMarginTop.clear().sendKeys(eyeglass_margin_top)
        browser.wait(until.presenceOf(v3.eyeglassMarginBottom), 20000, "Margin bottom field not found within timeout")
        v3.eyeglassMarginBottom.clear().sendKeys(eyeglass_margin_bottom)
        browser.wait(until.presenceOf(v3.eyeglassContentFontSize), 20000, "Font size field not found within timeout")
        v3.eyeglassContentFontSize.clear().sendKeys(eyeglass_font_size)
    },

    inputInIOPSection: function(iop_text, iop_component_height, iop_line_spacing) {
        /**
         * This function is used to input data in IOP section
         * @param iop_text: MANDATORY object
         *      This is used to enter IOP text
         * @param iop_component_height: MANDATORY object
         *      This is used to enter IOP component height
         * @param iop_line_spacing: MANDATORY object
         *      This is used to enter IOP line spacing
         * @return: None
         */
        browser.wait(until.presenceOf(v3.IOPTab), 20000, "IOP tab not found within timeout")
        v3.IOPTab.click()
        browser.wait(until.presenceOf(v3.IOPText), 20000, "Text box not found within timeout")
        v3.IOPText.sendKeys(key.SHIFT, key.END, key.BACK_SPACE, key.SHIFT, iop_text)
        browser.wait(until.presenceOf(v3.iopHeight), 20000, "Component height field not found within timeout")
        v3.iopHeight.clear().sendKeys(iop_component_height)
        browser.wait(until.presenceOf(v3.iopLineHeight), 20000, "Line spacing field not found within timeout")
        v3.iopLineHeight.clear().sendKeys(iop_line_spacing)
    },

    inputInAdviceSection: function(advice_text, advice_absolute_position_top, advice_absolute_position_left) {
        /**
         * This function is used to input data in Advice section
         * @param advice_text: MANDATORY object 
         *      This is used to enter advice text
         * @param advice_absolute_position_top: MANDATORY object
         *      This is used to enter advice absolute position top
         * @param advice_absolute_position_left: MANDATORY object
         *      This is used to enter advice absolute position left
         * @return: None
         */
        browser.executeScript('window.scrollTo(0,0)').then(function() {
            browser.wait(until.presenceOf(v3.adviceTab), 30000, "Advice tab not found within timeout")
            v3.adviceTab.click()
            browser.wait(until.presenceOf(v3.adviceText), 30000, "Text box not found within timeout")
            v3.adviceText.sendKeys(key.SHIFT, key.END, key.BACK_SPACE, key.SHIFT, advice_text)
            browser.wait(until.presenceOf(v3.adviceAbsolutePositionTop), 30000, "Absolute position top field not found within timeout")
            v3.adviceAbsolutePositionTop.clear().sendKeys(advice_absolute_position_top)
            browser.wait(until.presenceOf(v3.adviceAbsolutePositionLeft), 30000, "Absolute position left field not found within timeout")
            v3.adviceAbsolutePositionLeft.clear().sendKeys(advice_absolute_position_left)
        })
    },

    inputInReferralSection: function(referral_text, referral_margin_left, referral_margin_top,
        referral_margin_bottom, referral_font_size) {
        /**
         * This function is used to input data in Referral section
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
         * @return: None
         */
        browser.executeScript('window.scrollTo(0,0)').then(function() {
            browser.wait(until.presenceOf(v3.referralTab), 30000, "Referral tab not found within timeout")
            v3.referralTab.click()
            browser.wait(until.presenceOf(v3.referralText), 30000, "Text box not found within timeout")
            v3.referralText.sendKeys(key.SHIFT, key.END, key.BACK_SPACE, key.SHIFT, referral_text)
            browser.wait(until.presenceOf(v3.referralMarginLeft), 30000, "Margin left field not found within timeout")
            v3.referralMarginLeft.clear().sendKeys(referral_margin_left)
            browser.wait(until.presenceOf(v3.referralMarginTop), 30000, "Margin top field not found within timeout")
            v3.referralMarginTop.clear().sendKeys(referral_margin_top)
            browser.wait(until.presenceOf(v3.referralMarginBottom), 30000, "Margin bottom field not found within timeout")
            v3.referralMarginBottom.clear().sendKeys(referral_margin_bottom)
            browser.wait(until.presenceOf(v3.referralContentFontSize), 30000, "Font size field not found within timeout")
            v3.referralContentFontSize.clear().sendKeys(referral_font_size)
        })
    },

    inputInFollowUpSection: function(followUp_component_height, followUp_line_spacing) {
        /**
         * This function is used to input data in Follow up section
         * @param followUp_component_height: MANDATORY object
         *      This is used to enter followup component height
         * @param followUp_line_spacing: MANDATORY object
         *      This is used to enter followup line spacing
         * @return: None
         */
        browser.executeScript('window.scrollTo(0,0)').then(function() {
            browser.wait(until.presenceOf(v3.followUpTab), 30000, "FollowUp tab not found within timeout")
            v3.followUpTab.click()
            browser.wait(until.presenceOf(v3.followupHeight), 30000, "Component height field not found within timeout")
            v3.followupHeight.clear().sendKeys(followUp_component_height)
            browser.wait(until.presenceOf(v3.followupLineHeight), 30000, "Line spacing field not found within timeout")
            v3.followupLineHeight.clear().sendKeys(followUp_line_spacing)
        })
    },

    previewConfig: function() {
        /**
         * This function is used to click preview button
         * @return: None
         */
        browser.sleep(900)
        browser.wait(until.presenceOf(v3.preview), 30000, "Preview button not found within timeout")
        v3.preview.click()
    },
    SaveConfig: function() {
        /**
         * This function is used to click save buttons
         * @return: None
         */
         browser.sleep(1000)
         browser.wait(until.presenceOf(v3.save), 30000, "Save button not found within timeout")
         v3.save.click()
    },
    v3
}