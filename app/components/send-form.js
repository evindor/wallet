import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function() {
      this.sendAction('submit', {
        amount: this.get('amount'),
        address: this.get('address')
      });
    }
  }
});
