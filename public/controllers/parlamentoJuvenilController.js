angular
.module('legislaturaweb')
.controller('parlamentoJuvenilController',function($scope,$http,$rootScope,$window,$location){

	// Rutas.
	$scope.routeToParlamentos = '/rest/intranet.php/parlamento/juvenil';
    $scope.routeToOrdenesPJ   = '/rest/institucion.php/ordenes';
	
    // Inicializadora.
	$scope.init = ()=>{
        $rootScope.mediabar=false;
		if($location.path()==='/home') $rootScope.mediabar=true;
        $window.scrollTo(0,0);
		$scope.resetVars();
        $scope.showResolucion();
        $scope.getParlamentos();
        $scope.getOrdenesPJ();
        $scope.dhxTreeVersiones();
	};

	$scope.showResolucion  = ()=>{ $scope.resetVars(); $scope.varShowResolucion   = true; };
    $scope.showVersiones   = ()=>{ $scope.resetVars(); $scope.varShowVersiones    = true; };
    $scope.showOrdenes     = ()=>{ $scope.resetVars(); $scope.varShowOrdenes      = true; };
    $scope.showPrograma    = ()=>{ $scope.resetVars(); $scope.varShowPrograma    = true; };
    $scope.showColegios    = ()=>{ $scope.resetVars(); $scope.varShowColegios    = true; };
	

	$scope.resetVars = ()=>{
		$scope.varShowResolucion    = false;
        $scope.varShowVersiones     = false;
        $scope.varShowOrdenes       = false;
        $scope.varShowPrograma      = false;
        $scope.varShowColegios      = false;
	};

    // Show parlamento.
    $scope.showParlamento = (uriname)=>{
        route = $scope.routeToParlamentos+'/'+uriname;
        $http
            .get(route)
            .success((json)=>{if(json.result) $scope.parlamento=json.rows;})
            .error(()=>{console.log(route+' : No Data');});
    };

    // Solicitar parlamentos.
    $scope.getParlamentos = ()=>{
        $http
            .get($scope.routeToParlamentos)
            .success((json)=>{
                if(json.result){
                    $scope.parlamentos=json.rows;
                    $scope.showParlamento($scope.parlamentos[0].uriname);
                }
            })
            .error(()=>{console.log($scope.routeToParlamentos+' : No Data');});
    };

    // Solicitar ordenes.
    $scope.getOrdenesPJ = () =>{
        $http
            .get($scope.routeToOrdenesPJ)
            .success((json)=>{if(json.result)$scope.ordenes = json.rows.juvenil})
            .error(()=>{console.log($scope.routeToOrdenesPJ+' : No Data');});
    }

    // Armar versiones.
    $scope.dhxTreeVersiones = ()=>{
        var tree = new dhtmlXTreeObject('treeBox','100%','100%','rootPath');
        tree.setImagePath('/jscdn/dhx-tree/imgs/dhxtree_skyblue/');
        tree.load('/rest/institucion.php/versiones/juvenil','json');
    }

    // Imprimir.
    $scope.imprimir = (file)=>{
        uri = '/img/sesiones/'+file;
        win = window.open(uri);
        win.onload = ()=>{
            win.print();
            win.close();
        };
    };

	//Inicilizar.
	$scope.init();		
});