import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  init: function() {
    if (!this.get('controllers.application').get('wallet')) {
      return this.transitionToRoute('index');
    }
    this._super();
  },

  wallet: function() {
    var wallet = this.get('controllers.application').get('wallet');
    if (!wallet) {
      this.transitionToRoute('index');
    }
    return wallet;
  }.property(),

  //address: function() {
    //console.log(this.get('wallet'))
    //return this.get('wallet').getAddress(); 
  //}.property('this.wallet'),

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
      chain.transact(
        {
        inputs: [
          {
          address: window._address,
          private_key: wif
        }
        ],
        outputs: [
          {
          address: data.address,
          amount: data.amount
        }
        ]
      }, function(err, resp) {
        console.log('=================================')
        console.log(arguments);
        console.log('=================================')
      });
    }
  }
});
