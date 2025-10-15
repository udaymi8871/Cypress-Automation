const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 4000,
  reporter: 'cypress-mochawesome-reporter',
  
  // Fix permission issues by setting proper download and cache directories
  downloadsFolder: 'cypress/downloads',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  fixturesFolder: 'cypress/fixtures',
  supportFolder: 'cypress/support',
  
  // Ensure proper file handling
  fileServerFolder: '.',
  video: true,
  screenshotOnRunFailure: true,
  
  // projectId: "<Please create a project in Cypress Cloud>",
  // projectId: "cergzs",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", "cypress/integration/**/*.cy.{js,jsx,ts,tsx}"],
    supportFile: "cypress/support/e2e.js",
    baseUrl: 'https://rahulshettyacademy.com'
  },
});


