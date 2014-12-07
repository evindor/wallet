import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function() {
    window.localStorage.removeItem('wallet_seed');
    this.controllerFor('application').set('wallet', null);
    window._address = void(0);
    this.refresh();
    this.transitionTo('index');
  }
});
