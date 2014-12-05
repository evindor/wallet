import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'hash',
  normalizePayload: function(payload) {
    return { transactions: payload };
  }
});
