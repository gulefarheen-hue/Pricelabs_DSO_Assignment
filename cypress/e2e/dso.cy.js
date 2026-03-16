import LoginPage from "../pages/LoginPage"
import CalendarPage from "../pages/CalendarPage"

describe("Multicalendar Funtional and End to End DSO Automation", () => {

let data

before(() => {

cy.fixture("testdata").then((testData)=>{
data = testData
})

})

beforeEach(() => {

LoginPage.visitLogin()

LoginPage.login(
data.login.email,
data.login.password
)

cy.visit("https://app.pricelabs.co/multicalendar")

CalendarPage.verifyCalendarPage()

})

it("Update DSO values for a single date and Save", () => {

CalendarPage.searchProperty(data.property.name)

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.clickApplyOverride()

CalendarPage.enterFinalPrice("227")

CalendarPage.selectStartDate("17")

CalendarPage.selectEndDate("17")

cy.intercept("POST","**/add_bulk_custom_pricing").as("addDSO")

CalendarPage.clickAdd()

CalendarPage.handleOverrideConfirmation()

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.clickSaveandRefresh()
})
it("Bulk update for a date range and verify Save", () => {

CalendarPage.searchProperty(data.property.name)

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.clickApplyOverride()

CalendarPage.enterFinalPrice("300")

CalendarPage.selectStartDate("18")

CalendarPage.selectEndDate("20")

cy.intercept("POST","**/add_bulk_custom_pricing").as("addDSO")

CalendarPage.clickAdd()

CalendarPage.handleOverrideConfirmation()

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.clickSaveandRefresh()

})
it("Apply a DSO for single date change and verify that the Final Price updates accordingly", () => {

CalendarPage.searchProperty(data.property.name)

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.clickApplyOverride()

CalendarPage.enterFinalPrice("224")

CalendarPage.selectStartDate("17")

CalendarPage.selectEndDate("17")

cy.intercept("POST","**/add_bulk_custom_pricing").as("addDSO")

CalendarPage.clickAdd()

CalendarPage.handleOverrideConfirmation()

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.clickSaveandRefresh()

})
it("Apply a DSO for bulk date change and verify that the Final Price updates accordingly", () => {

CalendarPage.searchProperty(data.property.name)

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.clickApplyOverride()

CalendarPage.enterFinalPrice("300")

CalendarPage.selectStartDate("18")

CalendarPage.selectEndDate("20")

cy.intercept("POST","**/add_bulk_custom_pricing").as("addDSO")

CalendarPage.clickAdd()

CalendarPage.handleOverrideConfirmation()

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.clickSaveandRefresh()


})
})

