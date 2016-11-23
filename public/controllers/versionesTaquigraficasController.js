angular
		.module('legislaturaweb')
		.controller('versionesTaquigraficasController',function($scope,$http,$rootScope,$window,$location){
		
			// Rutas.
			$scope.routeToVersiones = '/rest/institucion.php/versiones';

			// Inicializadora..
			$scope.init = ()=>{
				$rootScope.mediabar=false;
				if($location.path()==='/home') $rootScope.mediabar=true;
				$window.scrollTo(0,0);
                $scope.dhxTreeVersionesTaquigraficas();
			};

			// Solicitar versiones.
            $scope.dhxTreeVersionesTaquigraficas = ()=>{
	            var tree = new dhtmlXTreeObject('treeBox','100%','100%','rootPath');
	            tree.setImagePath('/jscdn/dhx-tree/imgs/dhxtree_skyblue/');
                tree.load($scope.routeToVersiones,'json');
            }
            
			// Inicializar.
			$scope.init();
		});