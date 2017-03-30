
/*
    抛出事件 importSucess
*/

Ext.define('MyApp.view.targetData.import.import1.Import1', {
    extend: 'Ext.window.Window',
    requires: [
        'MyApp.view.targetData.import.import1.Import1Controller'
    ],

    xtype: 'app-targetData-import-import1',

    controller: 'targetData-import-import1',

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
            xtype: 'container',
            padding: 0,
            margin: 0,
            style:{
                height:'40px',
                overflow:'hidden'
            },
            layout: {
                type: 'column',
                // align: 'stretch'
            },
            items: [{
                reference: 'targetType',
                xtype: 'textfield',
                name: 'target_name',
                fieldLabel: '指标类型',
                allowBlank: false,
                readOnly: true,
                columnWidth: 0.82,
            },{
                xtype: 'button',
                style:{
                    top: '15px !important',
                    left: '-10px'
                },
                handler : 'onClickSelectTarget',
                text: '选择',
                columnWidth: 0.17,
            }]
        },{
            xtype: 'filefield',
            name: 'file',
            fieldLabel: '文件',
            msgTarget: 'side',
            allowBlank: false,
            anchor: '100%',
            buttonText: '选择文件'
        }, {
            xtype: 'hiddenfield',
            name: 'target_id',
            value: '-100'
        }, {
            xtype: 'hiddenfield',
            name: 'excel_type',
            value: '1'
        }],
        buttons: [{
        //     text: '重置',
        //     handler: 'onReset'
        // }, {
            text: '提交',
            handler: 'onClickImport'
        }],
    }]
});