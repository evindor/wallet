import Ember from 'ember';
/* global bitcoin */

export default Ember.Controller.extend({
    needs: ['application'],

    actions: {
        createWallet: function(seed) {
            var wallet = new bitcoin.Wallet(bitcoin.crypto.sha256(seed));
            this.get('controllers.application').set('wallet', wallet);
            // I'm feeling guilty for doing this, but i couldn't find
            // another solution to get props from controller in adapters
            // @see http://stackoverflow.com/questions/19818957/accessing-controller-properties-within-ember-data-rest-adapter
            window._address = wallet.getAddress();
            this.transitionToRoute('wallet/dashboard');
            return false;
        }
    }
});
