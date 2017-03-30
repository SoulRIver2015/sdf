
Ext.define('MyApp.view.main.container.Container', {
    extend: 'Ext.container.Container',
    requires: [
        'MyApp.config.Config',//加载主要的配置
        'MyApp.config.Tool',//加载工具
        'MyApp.view.main.container.ContainerController',
        'MyApp.view.main.nav.Nav',
        'MyApp.view.main.tabpanel.TabPanel'
    ],

    xtype: 'app-main-container',

    controller: 'main-container',

    id: 'mainContainer',

    layout: {
        type: 'border' 
    },

    items: [{
        region: 'north',
        xtype: 'component',
        cls: 'appBanner',
        // padding: 10,
        // height: 40,
        html: '<h1 style="'
            +'font-weight:normal;padding-left:10px">'
            +'粮食经济统计数据库 后台管理系统</h1>',
        // html: '页面管理系统'
    },{
        region: 'west',
        xtype: 'app-main-nav',
        itemId:'mainnav',
    },{
        xtype:'app-main-tabpanel',
        reference:'maintabpanel',
        region:'center'
    },{
        region: 'south',
        xtype: 'container',
        html:'<div style="color:white;line-height:2em;text-align:center">Copyright ©2015 粮食研究院</div>'
    }]
});