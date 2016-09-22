var basePath     = __dirname.replace('/scripts','');
var nodeModules  = basePath+'/node_modules';
var fileSystem   = require('fs');
var angular     = {

    //Paths.
    path:{
        application:basePath+'/public/application/application.js',
        controllers:basePath+'/public/controllers',
        views:basePath+'/public/views',
        index:basePath+'/public/index.html'
    },
    

    // Interfase. 
    appName:(appname)=>{
        if(appname===undefined) angular.messages.errorAppName();
        else{

            file = angular.path.application;
            angular.common.fileRead(file,(e,d)=>{
                if(!e) angular.messages.errorAppName();
                else{
                    init    = d.indexOf("('") +2;
                    end     = d.indexOf("',");
                    oldname = d.substring(init,end);
                    value   = d.replace(oldname,appname);
                    
                    angular.common.fileWrite(file,value,(e)=>{
                        if(!e) angular.messages.errorAppName();
                        else{
                            
                            file = angular.path.index;
                            angular.common.fileRead(file,(e,d)=>{
                                if(!e) angular.messages.errorAppName();
                                else{
                                    init    = d.indexOf('ng-app="') +8;
                                    end     = d.indexOf('">');
                                    oldname = d.substring(init,end);
                                    value   = d.replace(oldname,appname); 
                                    
                                    angular.common.fileWrite(file,value,(e)=>{
                                        if(e) angular.messages.successAppName();
                                        else  angular.messages.errorAppName();
                                    });
                                }
                            });

                        }
                    })
                }
            });
        }
    },

    addRoute:(route,params)=>{
        if(route===undefined) angular.messages.errorWriteRoute();
        else{
            angular.common.fileRead(angular.path.application,(e,d)=>{
                if(e){
                    init = d.indexOf("('") +2;
                    end  = d.indexOf("',");
                    var nameapp = d.substring(init,end);
                    file = angular.path.controllers+'/'+route+'Controller.js';
                    angular.common.fileExist(file,(e)=>{
                        if(e) angular.messages.errorWriteRoute();
                        else{
                            angular.common.fileRead(angular.path.application,(e,d)=>{
                                if(!e) angular.messages.errorWriteRoute();
                                else{
                                    var nameroute      = route;
                                    var namecontroller = route+'Controller';
                                    var nameview       = route+'View';
                                    if(params!=undefined) nameroute += '/'+params;
                                    var file     = angular.path.application;
                                    var value    = d.replace('\n\t\t\t//addroute.',angular.templates.route(nameroute,namecontroller,nameview));
                                    angular.common.fileWrite(file,value,(e)=>{
                                        if(!e) angular.messages.errorWriteRoute();
                                        else{
                                            var file  = angular.path.controllers+'/'+namecontroller+'.js';
                                            var value = angular.templates.constroller(nameapp,namecontroller);
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
                                                                    value    = d.replace('\n\t<!-- addcontroller -->',template);
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
            });
        }
    },

    addController:(name)=>{
        if(name===undefined) angular.messages.errorAddController();
        else{
            angular.common.addController(name,()=>{});
        }
    },


    // Metodos comunes.
    common:{

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
        },

        addController:(name,callback)=>{
            if(name===undefined || callback===undefined) angular.messages.errorAddController();
            else{
                angular.common.fileRead(angular.path.application,(e,d)=>{
                    if(e){
                        init = d.indexOf("('") +2;
                        end  = d.indexOf("',");
                        var nameapp     = d.substring(init,end);
                        var controller = name+'Controller';
                        var file  = angular.path.controllers+'/'+controller+'.js';
                        var value = angular.templates.constroller(nameapp,controller);
                        angular.common.fileExist(file,(e)=>{
                            if(e) angular.messages.errorAddController();
                            else{
                                angular.common.fileWrite(file,value,(e)=>{
                                    if(!e) angular.messages.errorAddController();
                                    else{
                                        var file  = angular.path.index;
                                        angular.common.fileRead(file,(e,d)=>{
                                            if(!e) angular.messages.errorAddController();
                                            else{
                                                var value = d.replace('\n\t<!-- addcontroller -->',angular.templates.script(controller));
                                                angular.common.fileWrite(file,value,(e)=>{
                                                    if(!e) angular.messages.errorAddController();
                                                    else{
                                                        angular.messages.successAddController();
                                                        callback();
                                                    }
                                                });
                                            }
                                        })
                                    }
                                });
                            } 
                        });
                    }           
                });
            }
        }
     
    },
    
    // Messages de consola.
    messages:{
        errorAppName        : ()=>{console.error('No se pudo establecer un nombre de aplicación.');},
        successAppName      : ()=>{console.log  ('Se ha establecido un nombre de aplicación.');},

        errorAddController  : ()=>{console.error('No se pudo agregar el controlador.');},
        successAddController: ()=>{console.log  ('El controlador se ha agregado correctamente.');},

        errorAppInitialised : ()=>{console.error('AngularJs informa que la aplicación ya fue inicializada.');},
        errorWriteRoute     : ()=>{console.error('No se pudo agregar la ruta');},
        errorReadFile       : ()=>{console.error('No se puede leer el archivo.');},
        errorFileExists     : ()=>{console.error('No pudo determinar su un archivo existe.');},

        successReplaceName  : ()=>{console.log('La aplicación fue inicializada en forma correcta.');},
        successWriteRoute   : ()=>{console.log('Se ha agregado una ruta.')}
    },

    // Templates.
    templates:{

        route:(nameroute,namecontroller,nameview)=>{
            template  = "\n\t\t\t.when('/"+nameroute+"',{";
            template += "\n\t\t\t\ttemplateUrl:'views/"+nameview+".html',";
            template += "\n\t\t\t\tcontroller:'"+namecontroller+"'";
            template += "\n\t\t\t})";
            template += '\n\t\t\t//addroute.';
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
            template += '\n\t<!-- addcontroller -->';
            return template;
        }



    }
};

module.exports = angular;