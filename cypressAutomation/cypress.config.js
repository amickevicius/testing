const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bigbox.lt',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // čia galima dėti plugin'us jei reikės
    }
  }
});
