const { defineConfig } = require("cypress");

module.exports = defineConfig({
  extends: '/cypress.json',
  video: true,
  screenshotOnRunFailure: true,
  numTestsKeptInMemory: 2,
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  defaultCommandTimeout: 12500,
  env : {
    baseUrl: 'https://dribbble.com/shots/popular',
    username: 'rausanu11',
    password: 'threatconnect21A'
  },
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
