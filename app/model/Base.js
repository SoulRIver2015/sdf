
Ext.define('MyApp.model.Base', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }],

    schema: {
        namespace: 'MyApp.model',  // generate auto entityName

        proxy: {     // Ext.util.ObjectTemplate
            type: 'ajax',
            url: '{entityName}.json',
            reader: {
                type: 'json',
                rootProperty: '{entityName:lowercase}'
            }
        }
    }
});