//@charset UTF-8
/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('MyApp.view.basicSettings.proCityArea.list.areaList.AreaListController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        // 'Ext.window.Window'
        // 'MyApp.view.basicSettings.proCityArea.modify.Modify'
    ],

    alias: 'controller.basicSettings-proCityArea-list-areaList',
    
    //初始化
    init: function() {
        this.title = this.getView().title;
    },

    onItemClick: function() {
        // noting to do
    },

    //添加同级指标
    onClickSearch: function(btn) {
        this._refresh();
    },

    //refresh事件
    onChangeCity: function(data) {
        var cityName = data.name;
        var cityCode = data.code;
        this.getView().setTitle (cityName + '【' + this.title + '】');
        this._refresh(cityCode);
    },

    //刷新列表
    _refresh: function(cityCode) {
        var self = this;

        // var name = this.lookupReference('txtName').value;
        // var code = this.lookupReference('txtCode').value;

        MyApp.config.Tool.ajaxPost( '~/area/search', {
            // name: name,
            // code: code,
            cityCode: cityCode
        }).then(function(result) {
            // selectedNode.set('text', newTargetName);
            // console.log(result);
            self.getView().store.loadData(result.data);
        })
    }

});
