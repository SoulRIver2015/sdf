
Ext.define('MyApp.view.basicSettings.proCityArea.list.baseList.BaseList', {
    extend: 'Ext.grid.Panel',

    xtype: 'app-basicSettings-proCityArea-list-baseList',

    listeners:{
        itemclick: 'onItemClick'
    },

    // header: false,
    style:{
        border:'1px solid #157FCC',
        margin:'10px 10px 10px 0',
    },
    columns: [
        { text: '名称', dataIndex: 'name', flex: 1 },
        { text: '编码', dataIndex: 'code' }
    ],
    // bbar: {
    //     items:[
    //         '->',{ 
    //             xtype: 'button', 
    //             text: '添加', 
    //             width: 70, 
    //             handler: 'onClickAdd' 
    //         },{ 
    //             xtype: 'button', 
    //             text: '修改', 
    //             width: 70, 
    //             handler: 'onClickModify' 
    //         },{ 
    //             xtype: 'button', 
    //             text: '删除', 
    //             width: 70, 
    //             handler: 'onClickRemove' 
    //         }
    //     ]
    // }
});