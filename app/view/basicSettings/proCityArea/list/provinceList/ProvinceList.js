
Ext.define('MyApp.view.basicSettings.proCityArea.list.provinceList.ProvinceList', {
    extend: 'MyApp.view.basicSettings.proCityArea.list.baseList.BaseList',
    requires: [
        'MyApp.view.basicSettings.proCityArea.list.provinceList.ProvinceListController',
    ],

    xtype: 'app-basicSettings-proCityArea-list-provinceList',

    controller: 'basicSettings-proCityArea-list-provinceList',

    title: '中国 所有省',
    store: Ext.create('Ext.data.Store')

});