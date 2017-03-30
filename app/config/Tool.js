Ext.define('MyApp.config.Tool', {
    requires: [
        'MyApp.config.Config'
    ],
    statics: {
        config : MyApp.config.Config,
        //解析形如 "~/" 的api路径
        parseApiUrl:function(url) {
            return url.replace(/^~\//,this.config.apiBasicUrl+"/");
        },
        //ajax请求 --> .then
        ajaxPost:function(url, params, flagLoading) {
            var self = this,
                urlFull = this.parseApiUrl(url),
                method = this.config.flagDebug ? 'GET' : 'POST',
                deferredSucc = new Ext.Deferred();
            //loading
            flagLoading = flagLoading === false ? false : true;//默认显示loading
            setTimeout(function() {
                if(flagLoading && !deferredSucc.completed) 
                    this.showLoadMask();
            },1000);
            //ajax
            Ext.Ajax.request({
                url: urlFull,
                params: params,
                method: method,
                useDefaultXhrHeader: false,//cross-origin
                success: function(result) {
                    //unloading
                    if(flagLoading) self.hideLoadMask();
                    //parse response
                    result = JSON.parse(result.responseText);
                    //console
                    console.log('ajaxsucc:-------->', { 
                        url: url, 
                        params: params, 
                        data: result 
                    });
                    //resolve
                    if(result.succ == "0"){
                        Ext.Msg.alert('提示', result.msg || '操作失败');
                    }else{
                        deferredSucc.resolve(result);
                    }
                },
                failure: function() {
                    //unloading
                    if(flagLoading) self.hideLoadMask();
                    //console
                    console.log('ajaxfail:-------->', { 
                        url: url, 
                        params: params, 
                        arguments: arguments 
                    });
                    //tip
                    Ext.Msg.alert('提示','服务器异常');
                }
            });
            return deferredSucc.promise;
        },
        getLoadMask: function() {
            if(!this._loadMask) {
                this._loadMask = new Ext.LoadMask({
                    msg    : '加载中...',
                    target : Ext.getCmp('mainContainer'),
                    style: { zIndex: '90000'}
                });
            }
            return this._loadMask;
        },
        showLoadMask: function() {
            var loadMask = this.getLoadMask();
            loadMask.show();
        },
        hideLoadMask: function() {
            var loadMask = this.getLoadMask();
            loadMask.hide();
        },
        /**
            通用gridDelete方法: 验证是否已选择、是否在弹窗提示中选择yes
            @parma grid: grid组件
            @parma gridname: grid代表的含义 -> eg: '请选择一个' + gridname
            @parma namecolumn: 可以代表列含义的字段 -> eg:'确认删除' + gridname + '【' + selectionData[namecolumn] + '】吗？'
            @return: promise.then(selectionData)
        */
        gridDelete:function(grid, gridname, namecolumn){
            var defer = new Ext.Deferred();
            //check selection
            var selection = grid.getSelection();
            if(selection.length == 0){
                var msg = '请选择一个' + gridname;
                Ext.Msg.alert('提示', msg);
                defer.reject(msg);
                return defer.promise;
            }
            //get selection
            var selectionData = selection[0].data;
            //确认删除吗
            Ext.MessageBox.confirm(
                '提示', 
                '确认删除' + gridname + '【' + selectionData[namecolumn] + '】吗？',
                function(result) {
                    if(result == 'yes'){
                        defer.resolve(selectionData);
                    } else {
                        defer.reject('confirm no,so reject');
                    }
                }
            );
            console.log(defer.promise);
            return defer.promise;
        }
    }
});