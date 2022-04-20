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
      target: 'lhci',
      serverBaseUrl: 'https://peaceful-earth-32428.herokuapp.com/',
      token: 'LHCI_TOKEN', // could also use LHCI_TOKEN variable instead
    },
  },
};
