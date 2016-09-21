var ngObject = require('./ngobject');
var appname  = process.argv[2];

if(appname!=undefined) ngObject.init(appname.trim());