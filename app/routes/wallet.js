import Ember from 'ember';
import AddressModel from '../models/address';
/* global bitcoin */

export default Ember.Route.extend({
  setupController: function(controller, model) {
    if (window._address) {
      this.store.unloadAll('transaction');
      controller.set('model', this.store.find('transaction'));
      controller.set('address', this.store.find('address', window._address));
    }
    this.startTickerCycle(controller);
  },

  startTickerCycle: function(controller) {
    var self = this;
    Em.run.later(function(){
      if (window._address) {
        self.store.find('transaction');
        self.store.find('address', window._address);
      }
      self.startTickerCycle(controller);
    }, 3000);
  }

});
