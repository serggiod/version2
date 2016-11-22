angular
		.module('legislaturaweb')
		.controller('prensaNoticiasController',function($scope,$rootScope,$http,$window,$routeParams){

			// Rutas.
			$scope.routeToNoticias = '/rest/institucion.php/actualidad/legislatura/'+$routeParams.pagina+'/10';

			// Inicializadora.
			$scope.init = ()=>{
				$window.scrollTo(0,0);
				$rootScope.mediabar = false;
				$scope.getNoticias();
			};

			// getNoticias.
			$scope.getNoticias = ()=>{
				$http
					.get($scope.routeToNoticias)
					.success((json)=>{if(json.result){
						$scope.noticias=json.rows;
						$scope.anterior  = parseInt($scope.noticias.paginador.pagina) -1;
						$scope.siguiente = parseInt($scope.noticias.paginador.pagina) +1;
						if($scope.anterior<1) $scope.anterior=1;
						if($scope.siguiente>$scope.noticias.paginador.paginas) $scope.siguiente = $scope.noticias.paginador.paginas; 
					}})
					.error(()=>{console.log($scope.routeToNoticias+' : No Data');});
			};

			// Inicializar.
			$scope.init();
		});