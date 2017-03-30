
Ext.define('MyApp.view.basicSettings.proCityArea.list.List', {
    // extend: 'Ext.panel.Panel',
    extend: 'Ext.panel.Panel',
    // extend: 'Ext.grid.Panel',
    requires: [
        "MyApp.view.basicSettings.proCityArea.list.provinceList.ProvinceList",
        "MyApp.view.basicSettings.proCityArea.list.cityList.CityList",
        "MyApp.view.basicSettings.proCityArea.list.areaList.AreaList",
        'MyApp.view.basicSettings.proCityArea.list.ListController'
    ],

    xtype: 'app-basicSettings-proCityArea-list',

    controller: 'basicSettings-proCityArea-list',

    cls: 'common-grid-inner-border',
    style: {
        paddingLeft: '10px'
    },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [{
        reference: 'gridProvince',
        xtype: 'app-basicSettings-proCityArea-list-provinceList',
        flex: 2,
        listeners: {
            'selectProvince': 'onSelectProvince'
        }
    },{
        reference: 'gridCity',
        xtype: 'app-basicSettings-proCityArea-list-cityList',
        flex: 2,
        listeners: {
            'selectCity': 'onSelectCity'
        }
    },{
        reference: 'gridArea',
        xtype: 'app-basicSettings-proCityArea-list-areaList',
        flex: 2
    }]
});