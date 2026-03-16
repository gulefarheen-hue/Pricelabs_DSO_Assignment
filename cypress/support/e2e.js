import '@4tw/cypress-drag-drop'
import 'cypress-mochawesome-reporter/register'
// global exception handling
Cypress.on("uncaught:exception", (err, runnable) => {
  return false
})

// optional global hooks
beforeEach(() => {

})
