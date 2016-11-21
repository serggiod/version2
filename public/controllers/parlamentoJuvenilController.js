angular
.module('legislaturaweb')
.controller('parlamentoJuvenilController',function($scope,$http,$rootScope,$window){

	// Rutas.
	$scope.routeToParlamentos = '/rest/intranet.php/parlamento/juvenil';
	
    // Inicializadora.
	$scope.init = ()=>{
        $window.scrollTo(0,0);
        $rootScope.mediaBar=false;
		$scope.resetVars();
        $scope.showResolucion();
        $scope.getParlamentos();
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

    // Armar versiones.
    $scope.dhxTreeVersiones = ()=>{
            var tree = new dhtmlXTreeObject('treeBox','100%','100%','rootPath');
            tree.setImagePath('/jscdn/dhx-tree/imgs/dhxtree_skyblue/');
            tree.load('/rest/institucion.php/versiones/juvenil','json');
        }

	//Inicilizar.
	$scope.init();		
});