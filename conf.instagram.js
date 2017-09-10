exports.config = {
  allScriptsTimeout: 400000,
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
    defaultTimeoutInterval: 400000,
    print: function() {}
  }
};
