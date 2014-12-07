import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    var seed = window.localStorage.getItem('wallet_seed'),
      wallet;
    if (seed) wallet = new bitcoin.Wallet(bitcoin.crypto.sha256(seed));
    if (wallet) {
      this.set('wallet', wallet);
      window._address = wallet.getAddress();
    }      
  }
});
