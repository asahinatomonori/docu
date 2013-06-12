Ext.define('AM.model.User', {
    extend: 'Ext.data.Model',
    stores:['Users'],
    models:['user'],    
    fields: ['name', 'email']
});