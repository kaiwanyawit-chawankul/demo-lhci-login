module.exports = {
  ci: {
    collect: {
      url: [
        "https://www.thoughtworks.com",
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox',
      }
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lhci-result',
    },
  },
};
