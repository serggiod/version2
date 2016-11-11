angular
		.module('legislaturaweb')
		.controller('versionesTaquigraficasController',function($scope,$http,$rootScope){
		
			// Rutas.
			$scope.routeToNoticiasDestacadas12         = '/rest/institucion.php/actualidad/legislatura/1';

			// función inicializadora.
			$scope.init = ()=>{
				$rootScope.mediaBar=false;
                $scope.dhxTreeVersionesTaquigraficas();
			};

            $scope.dhxTreeVersionesTaquigraficas = ()=>{
	            var tree = new dhtmlXTreeObject('treeBox','100%','100%','rootPath');
	            tree.setImagePath('/jscdn/dhx-tree/imgs/dhxtree_skyblue/');
                tree.load('/rest/institucion.php/versiones','json');
            }
            
			// Inicializar.
			$scope.init();
		});