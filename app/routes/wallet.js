import Ember from 'ember';

export default Ember.Route.extend({
    new: function() {
        console.log('123')
    },
    open: function() {
        console.log('open');
    }
});
