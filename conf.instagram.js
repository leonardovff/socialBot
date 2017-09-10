exports.config = {
  allScriptsTimeout: 2400000,
  specs: [
    'instagram.js'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      prefs: {
        'profile.managed_default_content_settings.notifications': 1
      }
    }
  },
  directConnect: true,
  baseUrl: 'https://instagram.com/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 2400000,
    print: function() {}
  }
};
