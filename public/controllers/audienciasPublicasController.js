angular
		.module('legislaturaweb')
		.controller('audienciasPublicasController',function($scope,$http,$rootScope,$window){
		
			// Rutas.
			$scope.routeToNoticiasDestacadas12         = '/rest/institucion.php/actualidad/legislatura/1';

			// función inicializadora.
			$scope.init = ()=>{
				$window.scrollTo(0,0);
				$rootScope.mediaBar=true;
				$scope.dhxTreeAudienciasPublicas();
			};

			// Widget Content: Noticias Top 4.
			$scope.getNoticiasTop4 = ()=>{
				$http
					.get($scope.routeToNoticiasTop4)
					.success((json)=>{ if(json.result) $scope.noticiasTop4=json.rows;})
					.error(()=>{$scope.routeToNoticiasTop4+' : No Data'});
			};

            $scope.dhxTreeAudienciasPublicas = ()=>{
	            var tree = new dhtmlXTreeObject('treeBox','100%','100%','rootPath');
	            tree.setImagePath('/jscdn/dhx-tree/imgs/dhxtree_skyblue/');
	            tree.load('/rest/institucion.php/versiones/audiencias','json');
            }


			// Inicializar.
			$scope.init();
		});