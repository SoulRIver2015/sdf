
Ext.define('MyApp.view.basicSettings.proCityArea.modify.Modify', {
    extend: 'Ext.window.Window',
    requires: [
        'MyApp.view.basicSettings.proCityArea.modify.ModifyController'
    ],
    xtype: 'app-basicSettings-proCityArea-modify',
    controller: 'basicSettings-proCityArea-modify',

    // config:{
    //     show: this.getController().onShow();
    // },

    modal:true,
    title: 'title',
    constrain: true,
    height: 200,
    width: 300,
    layout: 'fit',
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
                fieldLabel: "名称", 
                allowBlank: false 
            }, { 
                reference: 'txtCode',
                name: "code", 
                fieldLabel: "编码", 
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