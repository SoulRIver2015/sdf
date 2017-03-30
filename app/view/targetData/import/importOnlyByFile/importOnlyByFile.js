
/*
    抛出事件 importSucess
*/

Ext.define('MyApp.view.targetData.import.importOnlyByFile.ImportOnlyByFile', {
    extend: 'Ext.window.Window',
    requires: [
        'MyApp.view.targetData.import.importOnlyByFile.ImportOnlyByFileController'
    ],

    xtype: 'app-targetData-import-importOnlyByFile',

    controller: 'targetData-import-importOnlyByFile',

    config:{
        excel_type: undefined //传入excel_type
    },

    layout: {
        type: 'fit' 
    },

    modal: true,
    title: '导入Excel文件',
    width: 400,
    items: [{
        reference: 'form',
        xtype: 'form',
        defaultType: 'textfield',
        defaults: { anchor: '100%' },
        fieldDefaults: {
            labelWidth: 70,
            labelAlign: "left",
            flex: 1,
            margin: 15
        },
        items: [{ 
            xtype: 'filefield',
            name: 'file',
            fieldLabel: '文件',
            msgTarget: 'side',
            allowBlank: false,
            anchor: '100%',
            buttonText: '选择文件'
        }, {
            xtype: 'hiddenfield',
            name: 'excel_type',
            value: ''
        }],
        buttons: [{
            text: '提交',
            handler: 'onClickImport'
        }],
    }]
});