const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout : 4000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", "cypress/integration/**/*.cy.{js,jsx,ts,tsx}"],
    supportFile: "cypress/support/e2e.js"
  },
});
