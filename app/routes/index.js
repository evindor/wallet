import Ember from 'ember';

export default Ember.Route.extend({
  tickers: ['USD', 'EUR', 'THB', 'PHP'],

  setupController: function(controller, model) {
    controller.set('ticker', this.store.findAll('ticker'));    
    this.startTickerCycle(controller, this.tickers.copy());
  },

  startTickerCycle: function(controller, tickers) {
    if (tickers.length === 0) tickers = this.tickers.copy();
    var ticker = tickers.shift();
    controller.set('ticker', this.store.getById('ticker', ticker));
    var t = this.store.getById('ticker', ticker);
    var self = this;
    Em.run.later(function(){
      self.startTickerCycle(controller, tickers);
    }, 3000);
  }
});
