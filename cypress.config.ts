import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  screenshotOnRunFailure: false,
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: true,
    saveHtml: true,
    saveJson: false
  },
  video: false,
  retries: 1
});
