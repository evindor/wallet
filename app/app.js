import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import DS from 'ember-data';
/* global bitcoin */

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  apiKey: config.apiKey
});


loadInitializers(App, config.modulePrefix);

App.TransactionAdapter = DS.RESTAdapter.extend({
  host: 'https://api.chain.com',
  namespace: '/v2/bitcoin/',
  buildURL: function() {
    console.log('!!!!!!!');
    console.log(arguments);
    console.log(this);
    return this._super();
  }
});

export default App;
