import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.bitcoinaverage.com',
  buildURL: function(klass, id) {
    return this._super(klass, id);
  },
  pathForType: function(type) {
    return type + '/global/all';
  }
});
