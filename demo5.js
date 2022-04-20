module.exports = {
  ci: {
    collect: {
      url: [
        "/",
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: '--no-sandbox',
      },
      staticDistDir: "./dist"
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
