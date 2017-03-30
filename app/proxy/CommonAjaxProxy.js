
Ext.define('MyApp.proxy.CommonAjaxProxy', {
	extend: 'Ext.data.proxy.Ajax',
	alias:'proxy.CommonAjaxProxy',

	constructor: function(config) {
		this.callParent(arguments);
        this.url = MyApp.config.Tool.parseApiUrl(config.url);
        var method = MyApp.config.Config.flagDebug ? 'GET' : 'POST';
        this.actionMethods = {
            create : method,
            read   : method,
            update : method,
            destroy: method
        };
	},
    useDefaultXhrHeader: false,//cross-origin
    reader: {
        type: 'json',
        rootProperty: 'children'
    }
});