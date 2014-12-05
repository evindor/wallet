import DS from 'ember-data';

export default DS.Model.extend({
  total_balance: DS.attr(),
  confirmed_balance: DS.attr(),
  total_balance_btc: function() {
    return this.get('total_balance') / 100000000;
  }.property('this.total_balance')
});
