module.exports = {
  ci: {
    collect: {
      url: [
        "https://www.thoughtworks.com",
        "https://www.thoughtworks.com/radar"
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox',
        preset: 'perf'
      }
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
