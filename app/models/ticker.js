import DS from 'ember-data';

var Ticker = DS.Model.extend({
  price: DS.attr()  
});

export default Ticker;
