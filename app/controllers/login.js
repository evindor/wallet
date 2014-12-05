import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        openWallet: function() {
            console.log(arguments);
        }
    }
});
