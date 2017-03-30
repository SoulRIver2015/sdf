
 Ext.define('MyApp.view.basicSettings.targetUnit.list.ListController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'MyApp.view.basicSettings.targetUnit.modify.Modify',
    ],
    alias: 'controller.basicSettings-targetUnit-list',

    _viewStore: undefined,
    _modifyWindow: undefined,

    onBeforeRender:function() {
        this.refresh();
    },

    //新增按钮
    onClickSearch: function() {
        this.refresh();
    },

    //新增按钮
    onClickAdd: function() {
        var self = this;
        var modifyWindow = this.getModifyWindow();
        modifyWindow.title = "新增指标单位";
        modifyWindow.show().commit(function(data) {
            MyApp.config.Tool.ajaxPost( '~/targetUnit/add', { 
                name: data.name
            }).then(function(result) {
                if(result.succ == 1){
                    Ext.Msg.alert('提示', "添加成功");
                    modifyWindow.hide();
                    self.refresh();
                } else {
                    Ext.Msg.alert('提示', result.msg || "添加失败");
                }
            })
        })
    },

    //删除按钮
    onClickDelete: function() {

        // //每个修改 或删除按钮的 提示 都是冗余代码，需要抽出来，回来做！！！！！！！！！！！

        // var self = this;
        // //check selection
        // var selection = this.getView().getSelection();
        // if(selection.length == 0){
        //     Ext.Msg.alert('提示','请选择一个导入批次');
        //     return;
        // }
        // //get selection
        // var selectionData = selection[0].data;
        // console.log(selectionData);
        // //确认删除吗
        // var deferConfirm = new Ext.Deferred();
        // Ext.MessageBox.confirm(
        //     '提示', 
        //     '确认删除导入批次【' + selectionData.patch_remark + '】吗？',
        //     function(result) {
        //         console.log(result);
        //         if(result == 'yes'){
        //             deferConfirm.resolve();
        //         }
        //     }
        // );

        //验证是否已选择、是否在弹窗提示中选择yes
        var self = this;
        MyApp.config.Tool.gridDelete(
            this.getView(), '指标单位', 'name'
        ).then(function(selectionData) {
            //get selectedid
            var selectedID = selectionData.id;
            //post to delete
            MyApp.config.Tool.ajaxPost('~/targetunit/delete',{
                id: selectedID
            }).then(function(result) {
                if(result.succ == 1){
                    Ext.Msg.alert('提示','删除成功');
                    self.refresh();
                } else {
                    Ext.Msg.alert('提示','删除失败');
                }
            })
        }).otherwise(function(rejectReason) {
            console.log(rejectReason);
        })
    },

    // //删除按钮
    // onClickDelete: function() {
    //     var self = this;
    //     var modifyWindow = this.getModifyWindow();
    //     modifyWindow.title = "新增指标单位";
    //     MyApp.config.Tool.ajaxPost( '~/targetUnit/add', { 
    //         name: data.name
    //     }).then(function(result) {
    //         if(result.succ == 1){
    //             Ext.Msg.alert('提示', "添加成功");
    //             modifyWindow.hide();
    //             self.refresh();
    //         } else {
    //             Ext.Msg.alert('提示', result.msg || "添加失败");
    //         }
    //     })
    // },

    // //刷新按钮
    // onClickRefresh: function() {
    //     this.refresh();
    // },

    
    // // 删除
    // onClickDelete: function(btn) {
    //     //当前选择的节点 数组
    //     var selectedNodeArray = this.getView().getSelection();
    //     //若未选择，返回
    //     if(selectedNodeArray.length == 0) {
    //         Ext.Msg.alert('提示','请选择一个指标');
    //         return;
    //     }
    //     //当前选择节点
    //     var selectedNode =  selectedNodeArray[0];
    //     //非叶子节点不能删除
    //     if(!selectedNode.data.leaf){
    //         Ext.Msg.alert(
    //             '提示', 
    //             '节点【' + selectedNode.data.text + '】不是叶子节点，不能删除'
    //         );
    //         return;
    //     }
    //     //确认删除吗
    //     var deferConfirm = new Ext.Deferred();
    //     Ext.MessageBox.confirm(
    //         '提示', 
    //         '确认删除指标【' + selectedNode.data.text + '】吗？',
    //         function(result) {
    //             console.log(result);
    //             if(result == 'yes'){
    //                 deferConfirm.resolve();
    //             }
    //         }
    //     );
    //     //若确认删除
    //     deferConfirm.promise.then(function() {
    //         //ajax删除指标请求
    //         MyApp.config.Tool.ajaxPost( '~/target/delete', { 
    //             id: selectedNode.data.id ,
    //             parent_id: selectedNode.data.parent_id
    //         }).then(function(result) {
    //             Ext.Msg.alert('提示', '删除成功');
    //             window.selectedNode = selectedNode;
    //             if(result.data.parent_leaf == 1){
    //                 selectedNode.parentNode.set('leaf', 1);
    //             }
    //             selectedNode.remove();
    //         })
    //     })
    // },

    refresh: function() {
        var self = this;
        //init store
        if(!this._viewStore){
            this._viewStore = Ext.create('Ext.data.Store');
            this.getView().setStore(this._viewStore);
        }
        //setStore
        MyApp.config.Tool.ajaxPost('~/targetunit/get').then(function(result) {
            self.getView().store.loadData(result.data);
        })
    },

    getModifyWindow: function() {
        if(!this._modifyWindow){
            this._modifyWindow = Ext.create('MyApp.view.basicSettings.targetUnit.modify.Modify');
        }
        return this._modifyWindow;
    }

});
