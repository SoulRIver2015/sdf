
 Ext.define('MyApp.view.targetData.import.import1.Import1Controller', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        'MyApp.view.common.selectTarget.SelectTarget',
        // 'Ext.window.Window'
        // 'MyApp.view.targetData.import.modify.Modify'
    ],

    alias: 'controller.targetData-import-import1',

    onClickSelectTarget: function() {
        var self = this;
        if(!this.selectTargetWindow){
            this.selectTargetWindow = Ext.create('MyApp.view.common.selectTarget.SelectTarget',{
                listeners:{
                    'select': function(data) {
                        self.targetID = data.id;
                        self.lookupReference('form').getForm().setValues({
                            'target_id': data.id,
                            'target_name': data.name
                        });
                    }
                }
            });
        }
        this.selectTargetWindow.show();
    },
    
    onClickImport: function() {
        var self = this;
        var form = this.lookupReference('form').getForm();
        var url = MyApp.config.Tool.parseApiUrl('~/importTargetData/importExcelFile');
        if(form.isValid()){
            // window.form1 = form;
            form.submit({
                url: url,
                waitMsg: '文件上传中',
                failure: function(form, data) {//不知道为什么只能进入failure
                    if(data.result.succ == 1){
                        self.fireViewEvent('importSucess');
                    } else {
                        Ext.Msg.alert('提示', data.result && data.result.msg || '导入失败');
                    }
                }
            });
        }
    }
});
