import Ember from 'ember';
import config from './config/environment';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('wallet');
  this.route('logout');
});

export default Router.extend(ApplicationRouteMixin);
