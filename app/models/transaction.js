import DS from 'ember-data';

var TransactionModel = DS.Model.extend({
  confirmations: DS.attr(),
  inputs: DS.attr(),
  outputs: DS.attr(),
  fees: DS.attr(),
  block_time: DS.attr(),

  value: function() {
    var model = this;
    var outs = this.get('outputs').filter(function(out) {
      if (model.get('isOutbound')) {
        return out.addresses.indexOf(window._address) === -1;
      } else {
        return out.addresses.contains(window._address); 
      }
    });
    return outs.reduce(function(memo, out) { return memo + out.value}, 0);
  }.property('outputs'),

  value_btc: function() {
    return this.get('value') / 100000000;
  }.property('value'),

  isOutbound: function() {
    var ins = this.get('inputs').filter(function(input) {
      if (input.addresses.contains(window._address)) return true;
    });
    return ins.length > 0;
  }.property('inputs'),

  shortHash: function() {
    var id = this.get('id');
    return [id.slice(0, 3), '...', id.slice(id.length - 3, id.length)].join('');
  }.property('id'),

  blockchainLink: function() {
    return "https://blockchain.info/tx/" + this.get('id');
  }.property('id')

});

export default TransactionModel;
