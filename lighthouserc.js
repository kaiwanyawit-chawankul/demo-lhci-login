module.exports = {
  ci: {
    collect: {
      url: [
        "https://localhost:7003",
      ],
      puppeteerScript: './puppeteerScript.js',
      puppeteerLaunchOptions: { args: ['--allow-no-sandbox-job', '--allow-sandbox-debugging', '--no-sandbox', '--disable-gpu', '--disable-gpu-sandbox', '--display'] }, //https://www.puppeteersharp.com/api/PuppeteerSharp.LaunchOptions.html
      numberOfRuns: 1,
      startServerCommand: "dotnet run --project src/web",
      settings: {
        chromeFlags: '--no-sandbox',
        preset: 'desktop'
      }
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: 'filesystem',
      outputDir: '.lhci-result',
      serverBaseUrl: 'https://peaceful-earth-32428.herokuapp.com/',
      token: 'LHCI_TOKEN', // could also use LHCI_TOKEN variable instead
    },
  },
};
