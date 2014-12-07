import ChainComAdapter from './chain.com';

export default ChainComAdapter.extend({
  namespace: '/v2/bitcoin/addresses/',
  buildURL: function(klass, id) {
    return this.host + this.namespace + window._address + '/transactions?api-key-id=185fcf18e6208415c5f037895aeb484c' ;
  }
});
