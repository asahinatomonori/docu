Ext.define('AM.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',//ここでWidgetを名乗っている。 

    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {//テキストフィールドを2個とボタン2個を作っている
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',   //xtypeで部品
                        name : 'name',        //データーの箱
                        fieldLabel: 'Name'    //フィールドラベル
                    },
                    {
                        xtype: 'textfield',　　//xtypeで部品
                        name : 'email',　　　　//データーの箱
                        fieldLabel: 'Email'//フィールドラベル
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});