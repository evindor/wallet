import Ember from 'ember';
import AddressModel from '../models/address';

export default Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('model', this.store.find('transaction'));
        controller.set('address', this.store.find('address', window._address));
    },

    model: function() {
        this.store.find('transaction');
    }
});

