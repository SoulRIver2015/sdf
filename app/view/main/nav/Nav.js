/**
 * @class MyApp.view.main.nav.Nav MyApp.view.main.nav.Nav
 * @extends Ext.tree.Panel
 * @xtype app-main-nav
 * @mixins Gearbox.mixin.ModelInfo,
 * @mixins Gearbox.mixin.Logger
 * @requires 
 */
Ext.define('MyApp.view.main.nav.Nav', {
    extend: 'Ext.tree.Panel',
    xtype: 'app-main-nav',

    //依赖关系
    requires: [
        'MyApp.view.main.nav.NavController'
    ],
    controller: 'main-nav',

    //基本配置
    title: '管理菜单',
    width: 230,
    split: true,
    collapsible: true,
    root:{
        text:'根目录',
        PathName:'~',
        expanded:true
    },
    listeners: {
        afterRender:'onAfterRender',
        // select: 'onSelect',
        itemclick:'onItemClick',
        itemcontextmenu:'onItemContextMenu',
    },
    // store: Ext.create('MyApp.store.HtmlFilePath' ,{
    //     autoLoad:false
    // }),
    rootVisible:false,
    root: {
        text: '管理菜单',
        expanded: true,
        children: [
            { text: '基本设置', expanded: true,  children: [
                { text: '指标管理', leaf: true, viewName: 'MyApp.view.basicSettings.target.list.List' },
                { text: '指标单位管理', leaf: true, viewName: 'MyApp.view.basicSettings.targetUnit.list.List'},
                { text: '行政单位管理', leaf: true, viewName: 'MyApp.view.basicSettings.proCityArea.list.List'},
            ] },
            { text: '粮食数据管理', expanded: true, children: [
                { text: 'Excel导入', leaf: true, viewName: 'MyApp.view.targetData.import.main.Main' },
                { text: '数据查询', leaf: true}
            ] },
            { text: '系统管理', expanded: true, children: [
                {text: '超级管理员', leaf: true },
                {text: '修改密码', leaf: true },
                {text: '退出', leaf: true },
            ] }
        ]
    },

});