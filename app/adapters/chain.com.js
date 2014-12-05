import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.chain.com',
  namespace: 'v2/bitcoin/',
  buildURL: function(klass, id) {
    return this._super(klass, id) + '?api-key-id=185fcf18e6208415c5f037895aeb484c';
  }
});

