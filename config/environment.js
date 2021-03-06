/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'wallet',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'production') {
    ENV.baseURL = '/wallet';
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.apiKey = process.env.COINS_APIKEY;
  ENV.apiSecret = process.env.COINS_APISECRET;
  ENV.contentSecurityPolicy = {
    'connect-src': "'self' api.bitcoinaverage.com api.chain.com",
    'font-src': "'self' fonts.googleapis.com fonts.gstatic.com",
    'style-src': "'self' fonts.googleapis.com"
  }

  return ENV;
};
