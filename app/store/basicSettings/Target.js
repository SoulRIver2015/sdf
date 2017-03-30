
Ext.define('MyApp.store.basicSettings.Target', {
    extend: 'Ext.data.TreeStore',
    // model: 'MyApp.store.basicSettings.Target',
    model: 'MyApp.model.HtmlFilePath',
    alias: 'store.basicSettings-target',

    requires: [
        'MyApp.proxy.CommonAjaxProxy'
    ],

    autoLoad: true,
    proxy: {
        type: 'CommonAjaxProxy',
        url: '~/target/search'
    }
});

