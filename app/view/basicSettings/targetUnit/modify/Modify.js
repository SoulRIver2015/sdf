
Ext.define('MyApp.view.basicSettings.targetUnit.modify.Modify', {
    extend: 'Ext.window.Window',
    requires: [
        'MyApp.view.basicSettings.targetUnit.modify.ModifyController'
    ],
    xtype: 'app-basicSettings-targetUnit-modify',
    controller: 'basicSettings-targetUnit-modify',

    config:{
        show: function(values) { 
            return this.getController().show(values); 
        }
    },

    modal:true,
    title: 'title',
    constrain: true,
    width: 300,
    layout: 'fit',
    closeAction: 'hide',
    items: [{
        reference: 'form',
        xtype: 'form',
        defaultType: 'textfield',
        defaults: { anchor: '100%', },
        fieldDefaults: {
            labelWidth: 60,
            labelAlign: "left",
            flex: 1,
            margin: 15
        },
        items: [{
            name: "name",
            fieldLabel: "指标名称",
            allowBlank: false 
        }],
        buttons: [{
            text: '重置',
            handler: 'onReset'
        }, {
            text: '提交',
            // formBind: true, //only enabled once the form is valid
            // disabled: true,
            handler: 'onCommit'
        }],
    }]
});