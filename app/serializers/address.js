import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload: function(payload) {
    var addr = payload[0];
    return {
      address: {
        id: addr.address,
        total_balance: addr.total.balance,
        confirmed_balance: addr.confirmed.balance
      }
    };
  }
});
