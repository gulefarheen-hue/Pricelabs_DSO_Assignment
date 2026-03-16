import LoginPage from "../pages/LoginPage"
import CalendarPage from "../pages/CalendarPage"

describe("Multicalendar DSO Automation - Negative Scenarios", () => {

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

it("Negative Test: Invalid characters should not be accepted", () => {

CalendarPage.searchProperty(data.property.name)

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.clickApplyOverride()

CalendarPage.enterFinalPrice("abc")

cy.get('[qa-id="add-dso-button"]').click({force:true})

cy.contains("Fixed custom pricing should be greater than 0.")
.should("be.visible")

})

it("Negative Test: Out-of-range price should show validation", () => {

CalendarPage.searchProperty(data.property.name)

CalendarPage.selectPropertyCheckbox(data.property.name)

CalendarPage.clickApplyOverride()

CalendarPage.enterFinalPrice("999999%")

cy.get('[qa-id="add-dso-button"]').click({force:true})

cy.contains("Fixed custom pricing should be greater than 0")
.should("be.visible")

})

})
