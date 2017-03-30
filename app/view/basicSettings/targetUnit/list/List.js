
/*
    指标单位管理
*/

Ext.define('MyApp.view.basicSettings.targetUnit.list.List', {
    extend: 'Ext.grid.Panel',
    requires: [
        'MyApp.view.basicSettings.targetUnit.list.ListController'
    ],
    xtype:'app-basicSettings-targetUnit-list',
    controller: 'basicSettings-targetUnit-list',

    listeners: {
        beforeRender: 'onBeforeRender'
    },

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    cls: 'common-grid-inner-border',
    columns: [
        { text: '指标单位名称', dataIndex: 'name', flex: 1 },
    ],
    tbar: {
        style:{
            borderBottom:'1px solid #eee !important'
        },
        items:[
            '->',
            { text: '查询', width: 70, handler:'onClickSearch'},
            { text: '新增', width: 70, handler:'onClickAdd'},
            { text: '修改', width: 70, handler:'onClickModify'},
            { text: '删除', width: 70, handler:'onClickDelete'},
        ]
    }
});