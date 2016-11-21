angular
		.module('legislaturaweb')
		.controller('accesoALeyesController',function($scope,$http,$rootScope,$window){
		
			// Rutas.
			$scope.routeToNoticiasDestacadas12         = '/rest/institucion.php/actualidad/legislatura/1';

			// función inicializadora.
			$scope.init = ()=>{
				$rootScope.mediaBar=false;
				$window.scrollTo(0,0);
			};


			// Inicializar.
			$scope.init();
		});