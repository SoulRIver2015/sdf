
Ext.define('MyApp.store.HtmlFilePath', {
    extend: 'Ext.data.TreeStore',
    model: 'MyApp.model.HtmlFilePath',
    alias: 'store.HtmlFilePath',

    requires: [
        'MyApp.proxy.CommonAjaxProxy'
    ],

    autoLoad: true,
    proxy: {
        type: 'CommonAjaxProxy',
        url: '~/test/index',
    }
    // proxy: {
    //     type: 'ajax',
    //     url: 'http://localhost:81/HtmlFileEditor/directory/tree',
    // }
});