module.exports = {
  ci: {
    collect: {
      url: [
        "https://www.thoughtworks.com",
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox',
        // This setting makes the budgets section appear in the Lighthouse report itself
        budgetPath: "budgets.json"
      }
    },
    assert: {
      preset: "lighthouse:recommended",
      "performance-budget": "error"
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
