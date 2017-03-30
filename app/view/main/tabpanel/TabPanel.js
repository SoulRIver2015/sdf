
Ext.define('MyApp.view.main.tabpanel.TabPanel', {

    extend: 'Ext.tab.Panel',

    requires: [
        'MyApp.view.main.tabpanel.TabPanelController',
        // 'MyApp.view.basicSettings.target.list.List'//*******Fortest*************//测试单个页面暂时放在这里 -- 1
        // 'MyApp.view.targetData.import.main.Main'//*******Fortest*************//测试单个页面暂时放在这里 -- 1
        // 'MyApp.view.basicSettings.targetUnit.list.List'//*******Fortest*************//测试单个页面暂时放在这里 -- 1
    ],
    xtype: 'app-main-tabpanel',
    controller: 'main-tabpanel',

    listeners:{
        /*
            navNode:导航树中的treenode，附加它到tab项中，用来标识其与navNode
         */
        openTab:'openTab'
    },

    activeTab:0,
    cls:'mainTab',
    items: [{
        title: '主页',
        // navid: '-100',
        closable: true,
        bodyPadding: 20,
        html: '<div>请点击左侧导航</div>'
    // //******************************FortestBegin******************************//测试单个页面暂时放在这里 -- 2
    // },{
        // closable: true,
        // // xtype:'app-basicSettings-target-list',
        // xtype:'app-basicSettings-targetUnit-list',
        // // xtype:'app-targetData-import-main',
        // title:'test',
        // region:'center',
        // PathName:'xxxxxx/test.html'
    //******************************FortestEnd******************************//测试单个页面暂时放在这里 -- 3
    }]
});

