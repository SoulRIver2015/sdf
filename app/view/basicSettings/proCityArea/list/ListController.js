//@charset UTF-8
/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('MyApp.view.basicSettings.proCityArea.list.ListController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        // 'Ext.window.Window'
        // 'MyApp.view.basicSettings.proCityArea.modify.Modify'
    ],

    alias: 'controller.basicSettings-proCityArea-list',

    //选择省份事件
    onSelectProvince: function(data) {
        this.lookupReference('gridCity').fireEvent('changeProvince', data);
    },

    //选择市事件
    onSelectCity: function(data) {
        this.lookupReference('gridArea').fireEvent('changeCity', data);
    },
    
    // init: function() {
    //     var gridProvince = this.lookupReference('gridProvince');
    //     var gridCity = this.lookupReference('gridCity');
    //     gridProvince.
    // },

    //添加同级指标
    onClickAddSameLvl: function(btn) {
        //当前选择的节点 数组
        var selectedNodeArray = this.getView().getSelection();
        //若未选择，返回
        if(selectedNodeArray.length == 0) {
            Ext.Msg.alert('提示','请选择一个指标');
            return;
        }
        //当前选择节点
        var selectedNode =  selectedNodeArray[0];
        //弹窗title
        var title = btn.text + '【' + selectedNode.data.text + '】';
        //parentid
        var parentID = selectedNode.data.parent_id;
        //弹窗并添加节点
        this._addNode(title, parentID, selectedNode.parentNode);
    }
});
