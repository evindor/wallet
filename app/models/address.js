import DS from 'ember-data';

export default DS.Model.extend({
  total_balance: DS.attr(),
  confirmed_balance: DS.attr()
});
