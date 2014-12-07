import DS from 'ember-data';

export default DS.Model.extend({
    findAll: function() {
        var result = Ember.ArrayProxy.create({content: []});
        $.ajax('https://api.bitcoinaverage.com/ticker/global/all', 'GET', {
            crossDomain: true,
            success: function(data) {
                result.set('content', data);
            }
        });
        return result;
    }  
});
