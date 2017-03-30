
Ext.define('MyApp.view.basicSettings.proCityArea.list.cityList.CityList', {
    extend: 'MyApp.view.basicSettings.proCityArea.list.baseList.BaseList',
    requires: [
        'MyApp.view.basicSettings.proCityArea.list.cityList.CityListController',
    ],

    xtype: 'app-basicSettings-proCityArea-list-cityList',

    controller: 'basicSettings-proCityArea-list-cityList',

    title: '市列表',
    store: Ext.create('Ext.data.Store'),
    listeners:{
        changeProvince: 'onChangeProvince'
    },

});