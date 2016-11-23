angular
		.module('legislaturaweb')
		.controller('prensaFotografiaController',function($scope,$rootScope,$http,$window,$routeParams,$location){

				// Rutas.
				$scope.routeToFotografia = '/rest/institucion.php/fotografias/'+$routeParams.fotografia;

				// Inicializadora.
				$scope.init = ()=>{
					$rootScope.mediabar=false;
					if($location.path()==='/home') $rootScope.mediabar=true;
					$window.scrollTo(0,0);
					$scope.getFotografia();
				};

				// Get foto.
				$scope.getFotografia = ()=>{
					$http
						.get($scope.routeToFotografia)
						.success((json)=>{
							if(json.result){
								$scope.fotografia=json.rows;
								$scope.anterior  = parseInt($scope.fotografia.paginador.pagina) -1;
								$scope.siguiente = parseInt($scope.fotografia.paginador.pagina) +1;
								if($scope.anterior<1) $scope.anterior = 1;
								if($scope.siguiente>$scope.paginador.paginas) $scope.siguiente = $scope.paginador.paginas;
							}
						})
						.error(()=>{console.log($scope.routeToFotografia+' : No Data');});
				};

				// Inicializar.
				$scope.init();
		});