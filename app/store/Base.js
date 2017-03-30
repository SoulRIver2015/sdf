Ext.define('MyApp.store.Base', {
    extend: 'Ext.data.Store',

    constructor: function(config) {
        this.callParent(arguments);
        this.proxy.url = this.url;
    },

    autoLoad:true,
    proxy: {
        type: 'ajax',
        // url: 'serverdata/admin.json',
        url: this.url,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});