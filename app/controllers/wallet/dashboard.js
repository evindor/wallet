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

  address: function() {
    console.log(this.get('wallet'))
    return this.get('wallet').getAddress(); 
  }.property('this.wallet'),

  balance: function() {
    return this.get('wallet').getBalance();
  }.property('this.wallet')
});
