import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('model', model);
    }
    //model: function() {
        //return this.store.find('ticker');
    //}
});
