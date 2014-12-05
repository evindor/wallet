import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.chain.com',
  namespace: '/v2/bitcoin/addresses/',
  buildURL: function() {
    console.log('!!!!!!!');
    console.log(arguments);
    console.log(this);
    return this.host + this.namespace + '1HePqVMogEu6mVH793Y6oVXxT7swTrSiXA' + '/transactions?api-key-id=185fcf18e6208415c5f037895aeb484c' ;
    return this._super();
  }
});
