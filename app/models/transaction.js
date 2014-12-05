import DS from 'ember-data';

var TransactionModel = DS.Model.extend({
  confirmations: DS.attr(),
  inputs: DS.attr(),
  outputs: DS.attr(),
  fees: DS.attr(),
  amount: DS.attr()
});

export default TransactionModel;
