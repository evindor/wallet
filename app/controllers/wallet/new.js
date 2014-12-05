import Ember from 'ember';
/* global bitcoin */

export default Ember.Controller.extend({
    needs: ['application'],

    actions: {
        createWallet: function(seed) {
            var wallet = new bitcoin.Wallet(bitcoin.crypto.sha256(seed));
            this.get('controllers.application').set('wallet', wallet);
            this.transitionToRoute('wallet/dashboard');
            return false;
        }
    }
});
