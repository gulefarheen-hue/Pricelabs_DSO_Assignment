const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {

    baseUrl: "https://pricelabs.co",

    defaultCommandTimeout: 20000,

    chromeWebSecurity: false,

    env: {
      appUrl: "https://app.pricelabs.co"
    },

    setupNodeEvents(on, config) {}

  },

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  }

})