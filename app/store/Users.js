Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model:'AM.model.User',
    /*fields: ['name', 'email'],*/ //データーモデルの宣言

    data: [
        {name: 'Ed',    email: 'ed@sencha.com'},
        {name: 'Tommy', email: 'tommy@sencha.com'}
    ]
});