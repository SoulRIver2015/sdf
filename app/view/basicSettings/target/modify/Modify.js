
Ext.define('MyApp.view.basicSettings.target.modify.Modify', {
    extend: 'Ext.window.Window',
    requires: [
        'MyApp.view.basicSettings.target.modify.ModifyController'
    ],
    xtype: 'app-basicSettings-target-modify',
    controller: 'basicSettings-target-modify',

    config:{
        show: function(targetName) { 
            return this.getController().show(targetName); 
        }
    },

    modal:true,
    title: 'title',
    constrain: true,
    height: 130,
    width: 280,
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
                reference: 'txtName',
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