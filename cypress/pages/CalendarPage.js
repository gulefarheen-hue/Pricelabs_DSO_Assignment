import { calendarLocators } from "../locators/calendarLocators"

class CalendarPage {

verifyCalendarPage(){

cy.url().should("include","multicalendar")

}

searchProperty(property){

cy.get("#mc-search-listing")
.should("be.visible")
.clear()
.type(property + "{enter}")

}

selectPropertyCheckbox(property){

cy.contains("tr",property)
.find('input[type="checkbox"]')
.check({force:true})

}

verifyBulkBar(){

cy.contains("Apply Override")
.should("be.visible")

}

clickApplyOverride(){

cy.contains("Apply Override").click()

}

selectStartDate(day){

cy.contains('p','Date Range')
.parent()
.find('[qa-id="date-picker-calendar-start"]')
.click()

cy.contains('.react-datepicker__day', day)
.should('be.visible')
.click()

}

selectEndDate(day){

cy.contains('p','Date Range')
.parent()
.find('[qa-id="date-picker-calendar-end"]')
.click()

cy.contains('.react-datepicker__day', day)
.should('be.visible')
.click()

}

enterFinalPrice(price){

cy.get('[qa-id="dso-price"]')
.first()
.should("be.visible")
.clear()
.type(price)

}

clickAdd(){

cy.get('[qa-id="add-dso-button"]')
.should("be.visible")
.click({force:true})

}
 
handleOverrideConfirmation(){

cy.get("body").then(($body)=>{

// check if confirmation modal appears
if($body.find('button:contains("Update")').length > 0){

cy.contains("button","Update")
.should("be.visible")
.click()

// after update close the DSO panel
cy.get('[qa-id="dso-modal-close-button"]')
.should("be.visible")
.click()

}
else{

// if popup not present just close DSO panel
cy.get('[qa-id="dso-modal-close-button"]')
.should("be.visible")
.click()

}

})

}

clickSaveandRefresh(){

cy.intercept("POST","**/fetch_queued_listing**").as("calendarRefresh")

cy.contains("button","Save & Refresh")
.should("be.visible")
.click()

cy.wait("@calendarRefresh",{timeout:30000})

}

dragDates(property,startIndex,endIndex){

cy.contains("tr",property)
.find("td[class*='pricing-cell']")
.eq(startIndex)
.trigger("mousedown",{button:0})

cy.contains("tr",property)
.find("td[class*='pricing-cell']")
.eq(endIndex)
.trigger("mousemove")
.trigger("mouseup",{force:true})

}
}


export default new CalendarPage()