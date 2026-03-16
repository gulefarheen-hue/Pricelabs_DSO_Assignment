import LoginPage from "../pages/LoginPage"
import CalendarPage from "../pages/CalendarPage"

describe("Drag and drop", () => {

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

it("Drag and select date range in calendar grid", () => {

CalendarPage.searchProperty(data.property.name)

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.dragDates("192 Seasonal Property",1,3)

CalendarPage.verifyBulkBar()

CalendarPage.enterFinalPrice("224")

cy.intercept("POST","**/add_bulk_custom_pricing").as("addDSO")

CalendarPage.clickAdd()

CalendarPage.handleOverrideConfirmation()

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.clickSaveandRefresh()

})

})
