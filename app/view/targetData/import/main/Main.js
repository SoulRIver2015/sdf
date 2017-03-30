
Ext.define('MyApp.view.targetData.import.main.Main', {
    extend: 'Ext.grid.Panel',
    requires: [
        'MyApp.view.targetData.import.main.MainController'
    ],

    xtype: 'app-targetData-import-main',

    controller: 'targetData-import-main',

    listeners: {
        beforeRender: 'onBeforeRender'
    },

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    cls: 'common-grid-inner-border',
    columns: [
        { text: '导入备注', dataIndex: 'patch_remark', flex: 1 },
        { text: 'excel', dataIndex: 'excel_file_name_list', flex: 1  },
        { text: '导入时间', dataIndex: 'create_time', flex: 1  }
    ],
    tbar: {
        style:{
            borderBottom:'1px solid #eee !important'
        },
        items:[
            { 
                reference: 'comboExcelType',
                xtype: 'combo',
                fieldLabel: 'Excel类型',
                store: Ext.create('Ext.data.Store', {
                    fields: ['value', 'text'],
                    data : [
                        {"value":"1", "text":"Excel类型1"},
                        {"value":"2", "text":"Excel类型2"},
                        {"value":"3", "text":"Excel类型3"},
                        {"value":"4", "text":"Excel类型4"},
                        {"value":"5", "text":"Excel类型5"},
                        {"value":"6", "text":"Excel类型6"},
                        {"value":"8_1_1", "text":"Excel类型8_1_1"},
                        {"value":"8_1_2", "text":"Excel类型8_1_2"},
                        {"value":"8_3_2", "text":"Excel类型8_3_2"},
                        {"value":"9", "text":"Excel类型9"},
                        {"value":"10", "text":"Excel类型10"},
                        {"value":"11", "text":"Excel类型11"},
                        {"value":"12", "text":"Excel类型12"},
                        {"value":"13", "text":"Excel类型13"},
                    ]
                }),
                displayField: 'text',
                valueField: 'value'
            },
            { text: '导入Excel文件', handler:'onClickImport'}
            , '->',
            { text: '删除导入数据', handler:'onClickDelete'},
            { text: '刷新列表', handler:'onClickRefresh'}
        ]
    }
});