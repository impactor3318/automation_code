const { defineConfig } = require("cypress");
pageLoadTimeout: 80000
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/checkBox.js'
  },
});
