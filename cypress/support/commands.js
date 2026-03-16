Cypress.Commands.add("selectProperty",(property)=>{

cy.contains("tr",property)
.find('input[type="checkbox"]')
.check({force:true})

})