angular
		.module('legislaturaweb')
		.controller('accesoALeyesController',function($scope,$http,$rootScope){
		
			// Rutas.
			$scope.routeToNoticiasDestacadas12         = '/rest/institucion.php/actualidad/legislatura/1';

			// función inicializadora.
			$scope.init = ()=>{
				$rootScope.mediaBar=false;
			};


			// Inicializar.
			$scope.init();
		});