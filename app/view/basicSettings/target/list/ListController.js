//@charset UTF-8
/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('MyApp.view.basicSettings.target.list.ListController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        // 'Ext.window.Window'
        'MyApp.view.basicSettings.target.modify.Modify'
    ],

    alias: 'controller.basicSettings-target-list',
    
    //刷新
    onClickRefresh: function() {
        this.getView().store.reload();
    },

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
    },
    //添加下级指标
    onClickAddChildLvl: function(btn) {
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
        var parentID = selectedNode.data.id;
        //弹窗并添加节点
        this._addNode(title, parentID, selectedNode);
    },

    //修改
    onClickUpdate: function(btn) {
        //当前选择的节点 数组
        var selectedNodeArray = this.getView().getSelection();
        //若未选择，返回
        if(selectedNodeArray.length == 0) {
            Ext.Msg.alert('提示','请选择一个指标');
            return;
        }
        //当前选择节点
        var selectedNode =  selectedNodeArray[0];
        //弹窗
        var modifyWindow = this.getModifyWindow();
        modifyWindow.title = btn.text + '【' + selectedNode.data.text + '】';
        modifyWindow.show(
            selectedNode.data.name
        ).commit(function(formData) {
            // ajax请求
            MyApp.config.Tool.ajaxPost( '~/target/updateTarget', { 
                name: formData.name,
                id: selectedNode.data.id 
            }).then(function(result) {
                modifyWindow.hide();
                selectedNode.set('text', formData.name);
                selectedNode.set('name', formData.name);
                Ext.msg.Alert('提示', '修改成功！');
                // var new_record = result.data;
                // new_record.text = new_record.name;
                // new_record.leaf = 1;
                // parentNode.appendChild(new_record);
                // parentNode.expand();
                // modifyWindow.hide();
            })
        })
        // Ext.MessageBox.prompt(title, '指标名称：', function(result, newTargetName) {
        //     if(result == 'ok'){
        //         //ajax请求
        //         MyApp.config.Tool.ajaxPost( '~/target/updateTargetName', { 
        //             name: newTargetName,
        //             id: selectedNode.data.id 
        //         }).then(function(result) {
        //             selectedNode.set('text', newTargetName);
        //         })
        //     }
        // }, this, false, selectedNode.data.text);
    },

    // 删除
    onClickDelete: function(btn) {
        //当前选择的节点 数组
        var selectedNodeArray = this.getView().getSelection();
        //若未选择，返回
        if(selectedNodeArray.length == 0) {
            Ext.Msg.alert('提示','请选择一个指标');
            return;
        }
        //当前选择节点
        var selectedNode =  selectedNodeArray[0];
        //非叶子节点不能删除
        if(!selectedNode.data.leaf){
            Ext.Msg.alert(
                '提示', 
                '节点【' + selectedNode.data.text + '】不是叶子节点，不能删除'
            );
            return;
        }
        //确认删除吗
        var deferConfirm = new Ext.Deferred();
        Ext.MessageBox.confirm(
            '提示', 
            '确认删除指标【' + selectedNode.data.text + '】吗？',
            function(result) {
                console.log(result);
                if(result == 'yes'){
                    deferConfirm.resolve();
                }
            }
        );
        //若确认删除
        deferConfirm.promise.then(function() {
            //ajax删除指标请求
            MyApp.config.Tool.ajaxPost( '~/target/delete', { 
                id: selectedNode.data.id ,
                parent_id: selectedNode.data.parent_id
            }).then(function(result) {
                Ext.Msg.alert('提示', '删除成功');
                window.selectedNode = selectedNode;
                if(result.data.parent_leaf == 1){
                    selectedNode.parentNode.set('leaf', 1);
                }
                selectedNode.remove();
            })
        })
    },

    //弹窗并添加节点
    _addNode: function(title, parentID, parentNode) {
        var modifyWindow = this.getModifyWindow();
        modifyWindow.title = title;
        modifyWindow.show().commit(function(formData) {
            // ajax请求
            MyApp.config.Tool.ajaxPost( '~/target/add', { 
                name: formData.name,
                target_id: formData.target_id,
                parent_id: parentID 
            }).then(function(result) {
                // Ext.msg.Alert('提示', '添加成功！');
                var new_record = result.data;
                new_record.text = new_record.name;
                new_record.leaf = 1;
                parentNode.appendChild(new_record);
                parentNode.expand();
                modifyWindow.hide();
            })
        })
    },

    getModifyWindow: function() {
        if(!this.modifyWindow) {
            this.modifyWindow = Ext.create('MyApp.view.basicSettings.target.modify.Modify');
        }
        return this.modifyWindow;
    }
});
