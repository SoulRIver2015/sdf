
Ext.define('MyApp.view.main.nav.NavController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-nav',

    requires: [
        'MyApp.proxy.CommonAjaxProxy',
    ],

    //render后触发
    onAfterRender:function() {
        var _this = this;
        //屏蔽右键浏览器默认行为  
        this.getView().el.addListener('contextmenu',function (e) {
            e.stopEvent();
        })
        this.getView().el.addListener('click',function() {
            _this.hidAllMenu();//隐藏所有menu
        })
    },

    //点击节点
    onItemClick:function(view,record,item,index,e) {
        //非叶子节点无效
        if (!record.isLeaf()) {
            return;
        }
        //在view中抛出event供监听
        this.fireViewEvent('navSelect', record);
    },

    //右键node节点事件
    onItemContextMenu:function(view,record,item,index,e) {
        this.hidAllMenu();
        // debugger;
        var _this = this;
        //弹出右键
        if(!record.isLeaf()){//若是目录
            this.folderContextMenuTargetNode = record;//当前触发右键的record
            this.getContextMenuFolder().showAt(e.getXY());//显示contextmenu
        }else{//若是文件
            this.htmlContextMenuTargetNode = record;//当前触发右键的record
            this.getContextMenuHtml().showAt(e.getXY());//显示contextmenu
        }
    },

    getContextMenuFolder:function() {
        var _this = this;
        if(!this.contextmenuFolder){
            this.contextmenuFolder = Ext.create('MyApp.view.main.nav.contextmenufolder.ContextMenuFolder', {
                listeners:{
                    createFolder:function(folderName) {
                        var createPath = _this.folderContextMenuTargetNode.data.PathName + "/" + folderName;
                        var url = "~/directory/add", params = { pathName: createPath }
                        MyApp.config.Tool.ajaxPost(url, params, function() {
                            _this.folderContextMenuTargetNode.appendChild({
                                text: folderName,
                                PathName: createPath,
                                leaf: false
                            });
                        })
                    },
                    createHtml:function(htmlName) {
                        htmlName += ".html";
                        var createPath = _this.folderContextMenuTargetNode.data.PathName + "/" + htmlName;
                        var url = "~/file/add", params = { pathName: createPath }
                        MyApp.config.Tool.ajaxPost(url, params, function() {
                            _this.folderContextMenuTargetNode.appendChild({
                                text: htmlName,
                                PathName: createPath,
                                leaf: true
                            });
                        })
                        console.log("createHtml:",htmlName);
                    },
                    deleteFolder:function() {
                        if(_this.folderContextMenuTargetNode.hasChildNodes()){
                            Ext.Msg.alert('提示','删除目录失败，请先删除目录中的页面');
                            return;
                        }
                        var pathName = _this.folderContextMenuTargetNode.data.PathName;
                        var msg = "确认删除目录" + pathName + "吗？";
                        Ext.Msg.confirm('提示',msg,function(result) {
                            if(result != "yes") return;
                            var url = "~/directory/remove";
                            params = { pathName: pathName };
                            MyApp.config.Tool.ajaxPost(url,params,function(result) {
                                _this.folderContextMenuTargetNode.remove();
                            })
                        });
                        console.log('deleteFolder:',_this.folderContextMenuTargetNode);
                    }
                }
            });
        }
        return this.contextmenuFolder;
    },

    //右键html文件节点 产生的menu
    getContextMenuHtml:function(){
        var _this = this;
        // 创建contextmenuFolder
        if(!this.contextmenuHtml){
            this.contextmenuHtml = Ext.create('MyApp.view.main.nav.contextmenuhtml.ContextMenuHtml', {
                listeners:{
                    //监听删除文件 事件
                    deleteHtml:function() {
                        var msg = '确认删除页面'+_this.htmlContextMenuTargetNode.get('text')+'吗？';
                        var pathName = _this.htmlContextMenuTargetNode.data.PathName;

                        Ext.Msg.confirm('提示', msg, function(result) {
                            if(result=="yes"){
                                var url = "~/file/remove";
                                params = {pathName:pathName};
                                MyApp.config.Tool.ajaxPost(url,params,function(result) {
                                    _this.htmlContextMenuTargetNode.remove();
                                })
                            }
                        });
                    }
                }
            });
        }
        return this.contextmenuHtml;
    },

    hidAllMenu:function(argument) {
        if(this.contextmenuFolder) this.contextmenuFolder.hide();
        if(this.contextmenuHtml) this.contextmenuHtml.hide();
    },



});