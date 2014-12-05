import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        console.log('111', arguments, this);
    }
});
