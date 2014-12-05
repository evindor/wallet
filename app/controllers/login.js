import Ember from 'ember';

export default Ember.Controller.extend({
    //tickers: function() {
        //return this.get('model.content');
    //}.property('model.content')
    actions: {
        openWallet: function() {
            console.log(arguments);
        }
    }
});
