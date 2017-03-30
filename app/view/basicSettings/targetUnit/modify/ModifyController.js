//@charset UTF-8
/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('MyApp.view.basicSettings.targetUnit.modify.ModifyController', {
    extend: 'Ext.app.ViewController',
    requires: [
        // 'Ext.window.MessageBox',
        // 'Ext.window.Window'
    ],
    alias: 'controller.basicSettings-targetUnit-modify',

    /*
        私有对象：
            _cb_commit //提交按钮回调
            _maskCmp //显示的时候遮罩的组件
     */

    //显示弹窗，链式回调
    show: function(values) {
        values = values || {};
        values.name = values.name || "";
        //设置值
        this.lookupReference('form').getForm().setValues(values);
        var self = this;
        //继承调用show
        Ext.window.Window.superclass.show.call(this.getView());
        //链式调用 -->  .commit(fun(data))
        return {
            commit: function(cb_commit) {
                self._cb_commit = cb_commit;
            }
        }
    },

    //重置
    onReset: function() {
        this.lookupReference('form').getForm().reset();
    },

    //提交
    onCommit: function() {
        if(this._cb_commit) {
            this._cb_commit(this.lookupReference('form').getValues());
        }
    },


});
