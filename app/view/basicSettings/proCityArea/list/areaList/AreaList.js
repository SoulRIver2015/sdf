
Ext.define('MyApp.view.basicSettings.proCityArea.list.areaList.AreaList', {
    extend: 'MyApp.view.basicSettings.proCityArea.list.baseList.BaseList',
    requires: [
        'MyApp.view.basicSettings.proCityArea.list.areaList.AreaListController',
    ],

    xtype: 'app-basicSettings-proCityArea-list-areaList',

    controller: 'basicSettings-proCityArea-list-areaList',

    title: '区列表',
    store: Ext.create('Ext.data.Store'),
    listeners:{
        changeCity: 'onChangeCity'
    },

});