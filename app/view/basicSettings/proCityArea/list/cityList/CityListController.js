//@charset UTF-8
/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('MyApp.view.basicSettings.proCityArea.list.cityList.CityListController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        // 'Ext.window.Window'
        // 'MyApp.view.basicSettings.proCityArea.modify.Modify'
    ],

    alias: 'controller.basicSettings-proCityArea-list-cityList',
    
    //初始化
    init: function() {
        this.title = this.getView().title;
        // this._refresh();
    },

    //添加同级指标
    onClickSearch: function(btn) {
        this._refresh();
    },

    //选择一个市
    onItemClick: function(gridView, record) {
        this.getView().fireEvent('selectCity', record.data);
    },

    //refresh事件
    onChangeProvince: function(data) {
        var provinceName = data.name;
        var provinceCode = data.code;
        this.getView().setTitle (provinceName + '【' + this.title + '】');
        this._refresh(provinceCode);
    },

    //刷新列表
    _refresh: function(provinceCode) {
        var self = this;

        // var name = this.lookupReference('txtName').value;
        // var code = this.lookupReference('txtCode').value;

        MyApp.config.Tool.ajaxPost( '~/city/search', {
            // name: name,
            // code: code,
            provinceCode: provinceCode
        }).then(function(result) {
            // selectedNode.set('text', newTargetName);
            // console.log(result);
            self.getView().store.loadData(result.data);
        })
    }

});
