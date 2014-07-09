Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'My first cool testing App? - Version 2'},
    launch: function() {
        console.log("My first App - Version 2");
    }
});
