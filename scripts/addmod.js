var ngObject = require('./ngobject');
var modname  = process.argv[2];

if(modname!=undefined) ngObject.addMod(modname.trim());