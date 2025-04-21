/* This is collection of Organization selection objects*/
var until = protractor.ExpectedConditions

 module.exports = {
   // define all web elements
     orgSelectPageWebElements: {
         orgselect_button: element(by.css('.card .table tr:nth-child(3) td .btn')),
         orgSelect_button_appointment1:$('.card .table tr:nth-child(4) td .btn') 
     
       },


     clickonOrg: function() {
         /*
         This function will click on the organization and clicking it will navigate to dashboard.
         @return: None
         */
         browser.wait(until.presenceOf(this.orgSelectPageWebElements.orgselect_button), 20000, '"organization" in Dashboard is not present within timeout')
         this.orgSelectPageWebElements.orgselect_button.click();
     
        },
        clickonOrgApp: function(){
          /*
         This function will click on the organization for booking appointment and clicking it will navigate to dashboard.
         @return: None
         */
          browser.wait(until.presenceOf(this.orgSelectPageWebElements.orgSelect_button_appointment1), 20000, "org is not select within timeout" )
          this.orgSelectPageWebElements.orgSelect_button_appointment1.click();
        }

 }

