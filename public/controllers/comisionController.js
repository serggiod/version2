angular
		.module('legislaturaweb')
		.controller('comisionController',function($scope,$http,$rootScope,$routeParams,$window){
		
			// Rutas.
			$scope.routeToComision = '/rest/institucion.php/comision/'+$routeParams.uriname;

			// función inicializadora.
			$scope.init = ()=>{
				$window.scrollTo(0,0);
				$rootScope.mediaBar=true;
				$scope.reset();
				$scope.getComision();
			};

			// Reset.
			$scope.reset = ()=>{
				$scope.varCompetencias = false;
				$scope.varAutoridades = false;
				$scope.varDespacho = false;
				$scope.varComision = false;
				$scope.varReuniones = false;
			};

			$scope.showCompetencias = ()=>{ $scope.reset(); $scope.varCompetencias = true; };
			$scope.showAutoridades = ()=>{ $scope.reset(); $scope.varAutoridades = true; };
			$scope.showProyCDespacho = ()=>{ $scope.reset(); $scope.varDespacho = true; };
			$scope.showProyEComision = ()=>{ $scope.reset(); $scope.varComision = true; };
			$scope.showReuniones = ()=>{ $scope.reset(); $scope.varReuniones = true; };

			$scope.getComision = ()=>{
				$http
					.get($scope.routeToComision)
					.success((json)=>{
						if(json.result){
							$scope.comision=json.rows;
							$scope.varCompetencias = true;
						}
					})
					.error(()=>{console.log($scope.routeToComision+' : No Data');});
			};

			// Inicializar.
			$scope.init();
		});