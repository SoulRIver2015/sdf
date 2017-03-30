
Ext.define('MyApp.view.common.selectTarget.SelectTarget', {
    extend: 'Ext.window.Window',
    requires: [
        'MyApp.view.basicSettings.target.modify.ModifyController'
    ],
    modal:true,
    title: '选择指标',
    constrain: true,
    height: 600,
    width: 400,
    layout: 'fit',
    scrollable: true,
    closeAction: 'hide',
    items: [{
        xtype: 'treepanel',
        layout: {
            type: 'border' 
        },
        cls: 'common-grid-inner-border',
        hideHeaders: true,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        rootVisible: false,
        columns: [{
            xtype: 'treecolumn',
            text: '指标名称',
            flex: 1,
            sortable: true,
            dataIndex: 'name'
        }],
        listeners:{
            itemdblclick: function(treepanel, record) {
                var parentWindow = this.up('window');
                parentWindow.fireEvent('select', {
                    id: record.data.id,
                    name: record.data.name,
                });
                parentWindow.hide();
            }
        },
        store: Ext.create('MyApp.store.basicSettings.Target')
    }]
});