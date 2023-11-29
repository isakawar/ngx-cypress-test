import { defineConfig } from "cypress";

export default defineConfig({
  pageLoadTimeout: 80000,
  requestTimeout: 10000,
  e2e: {
    specPattern: 'cypress/e2e/tests/**/*.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4200/',
    retries: {openMode: 1, runMode: 1},
  },
});
