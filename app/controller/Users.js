Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
     stores: [
        'Users'
    ],
    views: [
        'user.List',
	'user.Edit'
    ],
　　//init:は起動時に動く　	
    init: function() {
        this.control({
            'viewport > userlist': {
                itemdblclick: this.editUser　//イベント：edituser:を読み込む
            },

	    'useredit button[action=save]':{
		click: this.updateUser      //usereditがsaveボタン,

	    }
        });
    },

 　 editUser: function(grid, record) {
        var view = Ext.widget('useredit');//widgetを初期化
        view.down('form').loadRecord(record);//レコード読み込み
    },  
　　updateUser:function(button){　　　//

	var win= button.up('window'),　 
        form   = win.down('form'),
        record = form.getRecord(), //
        values = form.getValues(); 

	record.set(values);　　//
	win.close();	//widgetを閉じる

	//console.log('clicked the Save button');
    }
});
