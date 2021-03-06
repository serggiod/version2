angular
		.module('legislaturaweb')
		.controller('versionesTaquigraficasController',function($scope,$http,$rootScope){
		
			// Rutas.
			$scope.routeToVersiones = '/rest/institucion.php/versiones';

			// Inicializadora..
			$scope.init = ()=>{
				$rootScope.mediaBar=false;
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