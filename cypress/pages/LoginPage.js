import { loginLocators } from "../locators/loginLocators"

class LoginPage {

visitLogin(){

cy.visit("/signin")

cy.url().should("include","signin")

}

login(email,password){

cy.get(loginLocators.emailInput)
.should("be.visible")
.clear()
.type(email)

cy.get(loginLocators.passwordInput)
.should("be.visible")
.clear()
.type(password)

cy.get(loginLocators.signInButton)
.should("be.visible")
.click()

// wait for redirect to app
cy.url().should("include","app.pricelabs.co")

}

}

export default new LoginPage()
