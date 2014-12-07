import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  sortProperties: ['confirmations'],

  init: function() {
    var wallet = this.get('controllers.application').get('wallet');
    if (!wallet) {
      this.transitionToRoute('index');
    }
  },

  wallet: function() {
    var wallet = this.get('controllers.application').get('wallet');
    return wallet;
  }.property(),

  balance: function() {
    return this.get('wallet').getBalance();
  }.property('this.wallet'),

  actions: {
    sendBTC: function(data) {
      var wallet = this.get('controllers.application').get('wallet');
      var wif = wallet.getPrivateKey().toWIF();
      var chain = new Chain({
        blockChain: "bitcoin",
        apiKeyId: "185fcf18e6208415c5f037895aeb484c"
      });

      chain.transact({
        inputs: [{
          address: window._address,
          private_key: wif
        }],
        outputs: [{
          address: data.address,
          amount: data.amount * 100000000
        }]
      }, function(err, resp) {
        //error handling
        console.log('=================================')
        console.log(arguments);
        console.log('=================================')
      });
    }
  }
});
