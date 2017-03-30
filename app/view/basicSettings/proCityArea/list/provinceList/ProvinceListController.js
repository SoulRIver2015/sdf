//@charset UTF-8
/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('MyApp.view.basicSettings.proCityArea.list.provinceList.ProvinceListController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        'MyApp.view.basicSettings.proCityArea.modify.Modify'
    ],

    alias: 'controller.basicSettings-proCityArea-list-provinceList',
    
    //初始化
    init: function() {
        this._refresh();
        this._modifyWindow = Ext.create('MyApp.view.basicSettings.proCityArea.modify.Modify');
        // this.onClickModify();// test
    },

    //选择一个省份
    onItemClick: function(gridView, record) {
        this.getView().fireEvent('selectProvince', record.data);
    },

    //查询按钮
    onClickSearch: function(btn) {
        this._refresh();
    },

    //添加按钮
    onClickAdd: function(btn) {
        this._refresh();
    },

    //修改按钮
    onClickModify: function(btn) {
        // var selection = this.getView().getSelection();
        // console.log(selection);
        // if(selection.length == 0){
        //     Ext.Msg.alert('提示', '请选择一个省份');
        //     return;
        // }

        // this._modifyWindow.title = '修改省份';
        // this._modifyWindow.setName(selection[0].data.name);
        // this._modifyWindow.setCode(selection[0].data.code);
        // this._modifyWindow.show().commit(function(data) {
        //     console.log(data)
        // });
    },

    //删除按钮
    onClickRemove: function(btn) {
        this._refresh();
    },

    //刷新grid
    _refresh: function() {
        var self = this;

        // var name = this.lookupReference('txtName').value;
        // var code = this.lookupReference('txtCode').value;
        var name = '';
        var code = '';

        MyApp.config.Tool.ajaxPost( '~/province/search', {
            name: name,
            code: code
        }).then(function(result) {
            self.getView().store.loadData(result.data);
        })
    }

});
