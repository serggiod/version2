angular
		.module('legislaturaweb')
		.controller('prensaFotografiaController',function($scope,$rootScope,$http,$window,$routeParams){

				// Rutas.
				$scope.routeToFotografia = '/rest/institucion.php/fotografias/'+$routeParams.fotografia;

				// Inicializadora.
				$scope.init = ()=>{
					$window.scrollTo(0,0);
					$rootScope.mediabar = false;
					$scope.getFotografia();
				};

				// Get foto.
				$scope.getFotografia = ()=>{
					$http
						.get($scope.routeToFotografia)
						.success((json)=>{
							if(json.result){
								$scope.fotografia=json.rows;
								$scope.anterior  = (parseInt($routeParams.fotografia)) +1;
								$scope.siguiente = (parseInt($routeParams.fotografia)) +1;
								if($scope.anterior<1) $scope.anterior = 1;
								if($scope.siguiente>$scope.paginador.paginas) $scope.siguiente = $scope.paginador.paginas;
							}
						})
						.error(()=>{console.log($scope.routeToFotografia+' : No Data');});
				};

				// Inicializar.
				$scope.init();
		});