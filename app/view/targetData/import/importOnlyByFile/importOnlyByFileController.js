
 Ext.define('MyApp.view.targetData.import.importOnlyByFile.ImportOnlyByFileController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox',
        'MyApp.view.common.selectTarget.SelectTarget',
    ],

    alias: 'controller.targetData-import-importOnlyByFile',

    onClickImport: function() {
        var self = this;
        var form = this.lookupReference('form').getForm();
        self.lookupReference('form').getForm().setValues({
            'excel_type': self.getView().excel_type
        });
        var url = MyApp.config.Tool.parseApiUrl('~/importTargetData/importExcelFile');
        if(form.isValid()){
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
