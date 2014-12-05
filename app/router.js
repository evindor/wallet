import Ember from 'ember';
import config from './config/environment';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('login');
  this.resource('wallet', function() {
    this.route('new');
    this.route('open');
  });
  this.route('wallet/new');
  this.route('wallet/dashboard');
});

export default Router.extend(ApplicationRouteMixin);
