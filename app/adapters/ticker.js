import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.bitcoinaverage.com',
  pathForType: function(type) {
    return type + '/global/all';
  }
});
