// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'facebook.js'
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
  baseUrl: 'https://facebook.com/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
//   onPrepare() {
//     require('ts-node').register({
//       project: 'e2e/tsconfig.e2e.json'
//     });
//     jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
//   }
};
