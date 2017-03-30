//@charset UTF-8
/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('MyApp.view.basicSettings.proCityArea.modify.ModifyController', {
    extend: 'Ext.app.ViewController',

    requires: [
        // 'Ext.window.MessageBox',
        // 'Ext.window.Window'
    ],
    
    init: function() {
        //显示弹窗，链式回调
        var self = this;
        this.getView().show = function() {
            //继承调用show
            Ext.window.Window.superclass.show.call(self.getView());
            //链式调用 -->  .commit(fun(data))
            return {
                commit: function(cb_commit) {
                    self._cb_commit = cb_commit;
                }
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
            var data = {
                name: this.lookupReference('txtName').value,
                code: this.lookupReference('txtCode').value
            };
            this._cb_commit(data);
        }
    },

    alias: 'controller.basicSettings-proCityArea-modify',

});
