//@charset UTF-8
/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('MyApp.view.basicSettings.proCityArea.list.baseList.BaseListController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        // 'Ext.window.Window'
        // 'MyApp.view.basicSettings.proCityArea.modify.Modify'
    ],

    alias: 'controller.basicSettings-proCityArea-list-baseList',
    
    //添加同级指标
    onClickSearch: function() {
        console.log(1);
    }
});
