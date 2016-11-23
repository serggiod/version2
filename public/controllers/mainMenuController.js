angular
		.module('legislaturaweb')
		.controller('mainMenuController',function($scope,$http,$location,$rootScope){

			// Rutas.
			$scope.routeToBloquesContent = '/rest/institucion.php/bloques';
			$scope.routeToComisiones = '/rest/institucion.php/comisiones';
			
			// Funcion inicializadora.
			$scope.init = ()=>{
				$rootScope.mediabar=false;
				if($location.path()==='/home') $rootScope.mediabar=true;
				// Fecha
				$scope.date       = new Date();
				$scope.meses      = new Array ("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre");
				$scope.diasSemana = new Array("domingo","lunes","martes","miércoles","jueves","viernes","sábado");
				$scope.fecha      = "San Salvador de Jujuy, " + $scope.diasSemana[$scope.date.getDay()] + " " + $scope.date.getDate() + " de " + $scope.meses[$scope.date.getMonth()] + " de " + $scope.date.getFullYear();
				
				// Menu Bloques.
				$http
					.get($scope.routeToBloquesContent)
					.success((json)=>{ if(json.result) $scope.bloques = json.rows; })
					.error(()=>{console.log($scope.routeToBloquesContent+' : No Data');});

				// Menu Comisiones.
				$http
					.get($scope.routeToComisiones)
					.success((json)=>{if(json.result) $scope.comisiones=json.rows;})
					.error(()=>{console.log($scope.routeToComisiones+' : No Data');})
			};

			$scope.strLocation = $location.url();
			$scope.strBuscar   = '';
			$scope.fncUpdateLocation = ()=>{ $scope.strLocation = $location.url(); };

			$scope.init();
		}); 