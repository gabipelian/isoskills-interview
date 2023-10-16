const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  includeShadowDom: true,
  chromeWebSecurity: false,
  env: {
    baseUrl: 'https://www.digipart.com/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
