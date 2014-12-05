import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload: function(payload) {
    var result = [];
    for (var ticker in payload) {
      var t = payload[ticker];
      console.log(t)
      result.push({id: ticker, price: t.last})
    }
    return { "tickers": result };
  }
});
