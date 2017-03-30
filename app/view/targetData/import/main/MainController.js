
 Ext.define('MyApp.view.targetData.import.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        'MyApp.view.targetData.import.import1.Import1',
        'MyApp.view.targetData.import.importOnlyByFile.ImportOnlyByFile',
    ],

    alias: 'controller.targetData-import-main',

    _viewStore: undefined,

    onBeforeRender:function() {
        this.refresh();
    },

    //上传按钮
    onClickImport: function() {
        var excelType = this.lookupReference('comboExcelType').getValue();
        if(excelType == 1){
            var importWindow = Ext.create('MyApp.view.targetData.import.import1.Import1',{
                listeners: {
                    importSucess: function() {
                        Ext.Msg.alert('提示','导入成功！');
                    }
                }
            });
            importWindow.show();
        } else {
            this.commonShowWindow(excelType);
        }
    },

    //刷新按钮
    onClickRefresh: function() {
        this.refresh();
    },

    //删除按钮
    onClickDelete: function() {
        var self = this;
        //check selection
        var selection = this.getView().getSelection();
        if(selection.length == 0){
            Ext.Msg.alert('提示','请选择一个导入批次');
            return;
        }
        //get selection
        var selectionData = selection[0].data;
        console.log(selectionData);
        //确认删除吗
        var deferConfirm = new Ext.Deferred();
        Ext.MessageBox.confirm(
            '提示', 
            '确认删除导入批次【' + selectionData.patch_remark + '】吗？',
            function(result) {
                console.log(result);
                if(result == 'yes'){
                    deferConfirm.resolve();
                }
            }
        );
        //若确认删除
        deferConfirm.promise.then(function() {
            //get selectedid
            var selectedID = selectionData.id;
            //post to delete
            MyApp.config.Tool.ajaxPost('~/importPatch/delete',{
                id: selectedID
            }).then(function(result) {
                if(result.succ == 1){
                    Ext.Msg.alert('提示','删除成功');
                    self.refresh();
                } else {
                    Ext.Msg.alert('提示','删除失败');
                }
            })
        })
    },

    refresh: function() {
        var self = this;
        //init store
        if(!this._viewStore){
            this._viewStore = Ext.create('Ext.data.Store');
            this.getView().setStore(this._viewStore);
        }
        //setStore
        MyApp.config.Tool.ajaxPost('~/importPatch/getImportPatch').then(function(result) {
            self.getView().store.loadData(result.data);
        })
    },

    commonShowWindow: function(excel_type) {
        var importWindow = Ext.create( 'MyApp.view.targetData.import.importOnlyByFile.ImportOnlyByFile', {
            excel_type: excel_type,
            title: '导入Excel文件(类型' + excel_type + ')' ,
            listeners: {
                importSucess: function() {
                    Ext.Msg.alert('提示','导入成功！');
                }
            }
        });
        importWindow.show();
    }

});
