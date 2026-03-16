Pricelabs DSO Assignment

Project Overview

This project automates the Multi Calendar DSO functionalit of PriceLabs using Cypress.
The framework covers UI automation, API testing, drag and drop interactions, and reporting.

The automation follows a Page Object Model (POM) structure to keep tests maintainable and reusable.

Project Structure

cypress
│
├── e2e
│   ├── draganddrop.cy.js
│   ├── dso.cy.js
│   ├── dsoapi.cy.js
│   └── dsoNegative.cy.js
│
├── fixtures
│   └── testData.json
│
├── locators
│   ├── calendarLocators.js
│   └── loginLocators.js
│
├── pages
│   ├── CalendarPage.js
│   └── LoginPage.js
│
├── support
│   ├── commands.js
│   └── e2e.js
```
Features Automated

 UI Automation

* Login to PriceLabs
* Navigate to Multicalendar
* Search Property
* Select Property Checkbox
* Apply Override Pricing
* Select Date Range
* Save and Refresh
* Drag and Drop date selection
*Negative Scenarios for DSO Automation

API Testing

* Verify bulk pricing update API returns success
* Verify API handles invalid payload
* Verify API response with expired authentication token
*Verify API response time

## Reporting

Mochawesome reporter is implemented.

Reports are generated inside:

```
cypress/reports
```
Screenshots are captured automatically on failure.


Run the Project

Install dependencies:
npm install


Run tests in headless mode:
npx cypress run

Open Cypress Test Runner:
npx cypress open
