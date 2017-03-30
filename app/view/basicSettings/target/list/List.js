
Ext.define('MyApp.view.basicSettings.target.list.List', {
    // extend: 'Ext.panel.Panel',
    extend: 'Ext.tree.Panel',
    // extend: 'Ext.grid.Panel',
    requires: [
        'MyApp.config.Config',//加载主要的配置
        'MyApp.view.basicSettings.target.list.ListController',
        'MyApp.store.TestStore'
    ],

    xtype: 'app-basicSettings-target-list',

    controller: 'basicSettings-target-list',

    layout: {
        type: 'border' 
    },
    cls: 'common-grid-inner-border',
    tbar: {
        style:{
            borderBottom:'1px solid #eee !important'
        },
        items:[
            { text: '刷新' , handler:'onClickRefresh'},
            '->',
            { text: '添加同级指标' , handler:'onClickAddSameLvl'},
            '-', 
            { text: '添加下级指标' , handler:'onClickAddChildLvl' },
            '-', 
            { text: '修改指标', width: 90  , handler:'onClickUpdate'},
            '-', 
            { text: '删除指标', width: 90 , handler:'onClickDelete' },
        ]
    },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    rootVisible: false,
    columns: [{
        xtype: 'treecolumn', //this is so we know which column will show the tree
        text: '指标名称',
        flex: 1,
        sortable: true,
        dataIndex: 'name'
    }],
    store: Ext.create('MyApp.store.basicSettings.Target'),
    // items: [{
    //     xtype: 'treepanel',
    //     title: '指标列表',
    //     store: Ext.create('MyApp.store.basicSettings.Target'),
    //     style:{
    //         border:'1px solid #157FCC',
    //         margin:'0 10px 0 10px',
    //     },
    //     flex: 2
    // },{
    //     xtype: 'container',
    //     title: 'Inner Panel Two',
    //     style:{
    //         // border:'1px solid #ccc'
    //     },
    //     flex: 2
    // }],
    // bbar: [
    //     { xtype: 'button', text: 'Button 1' }
    // ],


    // store: Ext.create('MyApp.store.TestStore')
});