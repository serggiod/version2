var basePath     = __dirname.replace('/scripts','');
var nodeModules  = basePath+'/node_modules';
var fileSystem   = require('fs');
var angular     = {

    name:null,

    setname:()=>{
        angular.common.fileRead(angular.path.application,(e,d)=>{
            if(!e) angular.name='NoName';
            else {
                init = d.indexOf("('") +2;
                end  = d.indexOf("',");
                angular.name = d.substring(init,end);
            }           
        });
    },

    //Paths.
    path:{
        application:basePath+'/public/application/application.js',
        controllers:basePath+'/public/controllers',
        views:basePath+'/public/views',
        index:basePath+'/public/index.html'
    },
    

    // Interfase. 
    init:(appname)=>{
        if(appname===undefined) angular.messages.emptyname();
        else angular.common.createApp(appname);
    },

    addRoute:(route,params)=>{
        angular.setname();
        if(route===undefined) angular.messages.errorWriteRoute();
        else{
            file = angular.path.controllers+'/'+route+'Controller.js';
            angular.common.fileExist(file,(e)=>{
                if(e) angular.messages.errorWriteRoute();
                else{
                    angular.common.fileRead(angular.path.application,(e,d)=>{
                        if(!e) angular.messages.errorWriteRoute();
                        else{
                            
                            var nameapp        = angular.name;
                            var nameroute      = route;
                            var namecontroller = route+'Controller';
                            var nameview       = route+'View';

                            if(params!=undefined) nameroute += '/'+params;

                            file     = angular.path.application;
                            template = angular.templates.route(nameroute,namecontroller,nameview);
                            value    = d.replace('\n//ngRouteName.',template);
                            angular.common.fileWrite(file,value,(e)=>{
                                if(!e) angular.messages.errorWriteRoute();
                                else{

                                    file  = angular.path.controllers+'/'+namecontroller+'.js';
                                    value = angular.templates.constroller(nameapp,namecontroller);
                                    angular.common.fileWrite(file,value,(e)=>{
                                        if(!e) angular.messages.errorWriteRoute();
                                        else{

                                            file  = angular.path.views+'/'+nameview+'.html';
                                            value = angular.templates.view(namecontroller);
                                            angular.common.fileWrite(file,value,(e)=>{
                                                if(!e) angular.messages.errorWriteRoute();
                                                else{

                                                    file = angular.path.index;
                                                    angular.common.fileRead(file,(e,d)=>{
                                                        if(!e) angular.messages.errorWriteRoute();
                                                        else{

                                                            template = angular.templates.script(namecontroller+'.js');
                                                            value    = d.replace('\n<!-- newcontroller -->',template);
                                                            angular.common.fileWrite(file,value,(e)=>{
                                                                if(e) angular.messages.successWriteRoute();
                                                                else angular.messages.errorWriteRoute();
                                                            });

                                                        }
                                                    });

                                                }
                                            });

                                        }

                                    });
                                    
                                }
                            })
                        }
                    })
                    
                }
            });
        }
    },

    addMod:(modname)=>{
        console.log(angular.common.exists(modname));
    },


    // Metodos.
    common:{

        createApp:(appname)=>{
            if(angular.common.exists()) angular.messages.errorAppInitialised(); 
            else angular.common.setAppName(appname);
        },

        /*
        exists:(name)=>{
            if(name!=undefined){
                fileSystem.readdir(angular.controllerDir,(e,d)=>{
                    if(e) throw e;
                    if(d.length) return true;
                    else return false;
                })
            } else {
                fileSystem.Stats(angular.controllerDir+'/'+name+'Controller.js',(e)=>{
                    if(e===undefined) return false;
                    else return true;
                });
            }

        },
        */

        getAppName:()=>{

        },

        setAppName:(appname)=>{
            /*
            fileSystem.readFile(angular.path.application,'utf8',(e,f)=>{
                if(angular.path.controllers = f.replace(angular.common.getAppname(f),appname);
                conviewsiteFile(angular.application,application,'utf8',angular.messages.successReplaceName);
                    controlleviews
            });
            */
        },

        fileExist:(file,callback)=>{
            if(callback===undefined || file===undefined) angular.messages.errorFileExists();
            else{
                fileSystem.readFile(file,(e)=>{
                    if(e) callback(false);
                    else  callback(true);
                });
            }
        },

        fileWrite:(file,value,callback)=>{
            if(callback===undefined) angular.messages.errorFileExists();
            else {
                if(file===undefined && value===undefined) callback(false);
                else{
                    fileSystem.writeFile(file,value,'utf8',(e)=>{
                        if(e) callback(false);
                        else callback(true);
                    });
                }
            }
        },

        fileRead:(file,callback)=>{
            if(callback===undefined) angular.messages.errorReadFile();
            else {
                if(file===undefined) callback(false,undefined);
                else{
                    fileSystem.readFile(file,'utf8',(e,d)=>{
                        if(e) callback(false,undefined);
                        else  callback(true,d);
                    });
                }
            }
        }

     
    },
    
    // Messages
    messages:{
        errorAppNeedsName   : ()=>{console.error('AngularJs necesita un nombre de aplicación.\n\n');},
        errorAppInitialised : ()=>{console.error('AngularJs informa que la aplicación ya fue inicializada.\n\n');},
        errorWriteRoute     : ()=>{console.error('AngularJs: No se pudo agregar la ruta');},
        errorReadFile       : ()=>{console.error('AngularJs: No se puede leer el archivo.');},
        errorFileExists     : ()=>{console.error('AngularJS: No pudo determinar su un archivo existe.');},

        successReplaceName  : ()=>{console.log('AngularJs informa que la aplicación fue inicializada en forma correcta.\n\n');},
        successWriteRoute   : ()=>{console.log('AngulasJS: Se ha agregado una ruta.')}
    },

    // Templates.
    templates:{

        route:(nameroute,namecontroller,nameview)=>{
            template  = "\n\t\t\t.when('/"+nameroute+"',{";
            template += "\n\t\t\t\ttemplateUrl:'views/"+nameview+".html',";
            template += "\n\t\t\t\tcontroller:'"+namecontroller+"'";
            template += "\n\t\t\t})";
            template += "\n//ngRouteName.";
            return template;
        },
        constroller:(nameapp,namecontroller)=>{
            template  = "angular";
            template += "\n\t\t.module('"+nameapp+"')";
            template += "\n\t\t.controller('"+namecontroller+"',function($scope,$http){";
            template += "\n\t\t});";
	        return template;
        },
        view:(namecontroller)=>{
            template  = "Ingrese aqui el c&oacute;digo html del controlador "+namecontroller+".";
            return template;
        },
        script:(namecontroller)=>{
            template  = '\n\t\t<script src="controllers/'+namecontroller+'"></script>';
            template += '\n<!-- newcontroller -->';
            return template;
        }



    }
};

module.exports = angular;