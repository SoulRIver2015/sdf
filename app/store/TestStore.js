
// Ext.define('User', {
//      extend: 'Ext.data.Model',
//      fields: [
//          {name: 'firstName', type: 'string'},
//          {name: 'lastName',  type: 'string'},
//          {name: 'age',       type: 'int'},
//          {name: 'eyeColor',  type: 'string'}
//      ]
//  });


Ext.define('MyApp.store.TestStore', {
    extend: 'Ext.data.Store',
    // model: 'User',
    // alias: 'store.HtmlFilePath1',

    requires: [
        'MyApp.proxy.CommonAjaxProxy'
    ],
    autoLoad: true,
    proxy: {
        type: 'CommonAjaxProxy',
        url: '~/test/index',
    },
    // fields:[ 'name', 'email', 'phone'],
    // fields:[ 'name', 'email'],
    // data: [
    //     { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    //     { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    //     { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
    //     { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    // ]
});



// Ext.define('MyApp.store.HtmlFilePath1', {
//     extend: 'Ext.data.TreeStore',
//     model: 'MyApp.model.HtmlFilePath',
//     alias: 'store.HtmlFilePath1',

//     requires: [
//         'MyApp.proxy.CommonAjaxProxy'
//     ],

//     autoLoad: true,
//     proxy: {
//         type: 'CommonAjaxProxy',
//         url: '~/directory/tree',
//     }
//     // proxy: {
//     //     type: 'ajax',
//     //     url: 'http://localhost:81/HtmlFileEditor/directory/tree',
//     // }
// });