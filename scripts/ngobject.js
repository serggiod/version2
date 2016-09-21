var basePath     = __dirname.replace('/scripts','');
var nodeModules  = basePath+'/node_modules';
var fileSystem   = require('fs');
var ngObject     = {

    //ngAppPath
    applicationFile:basePath+'/public/application/application.js',
    controllerDir:basePath+'/public/controllers',
    viewsDir:basePath+'/public/views',

    // Interfase. 
    init:(appname)=>{
        if(appname===undefined) ngObject.messages.emptyname();
        else ngObject.common.createApp(appname);
    },

    addMod:(modname)=>{
        console.log(ngObject.common.exists(modname));
    },

    // Metodos.
    common:{

        createApp:(appname)=>{
            if(ngObject.common.exists()) ngObject.messages.errorAppInitialised(); 
            else ngObject.common.setAppName(appname);
        },

        exists:(name)=>{
            if(name!=undefined){
                fileSystem.readdir(ngObject.controllerDir,(e,d)=>{
                    if(e) throw e;
                    if(d.length) return true;
                    else return false;
                })
            } else {
                fileSystem.Stats(ngObject.controllerDir+'/'+name+'Controller.js',(e)=>{
                    if(e===undefined) return false;
                    else return true;
                });
            }

        },

        getAppname:(str)=>{
            init = str.indexOf("('") +2;
            end  = str.indexOf("',");
            return str.substring(init,end);
        },

        setAppName:(appname)=>{
            fileSystem.readFile(ngObject.applicationFile,'utf8',(e,f)=>{
                if(e) throw e;
                applicationFile = f.replace(ngObject.common.getAppname(f),appname);
                fileSystem.writeFile(ngObject.applicationFile,applicationFile,'utf8',ngObject.messages.successReplaceName);
            });
        },

        
    },
    
    // Messages
    messages:{
        errorAppNeedsName:()=>{console.error('AngularJs necesita un nombre de aplicación.\n\n');},
        errorAppInitialised:()=>{console.error('AngularJs informa que la aplicación ya fue inicializada.\n\n');},

        successReplaceName:()=>{console.log('AngularJs informa que la aplicación fue inicializada en forma correcta.\n\n');}
    }
};

module.exports = ngObject;