angular
		.module('legislaturaweb')
		.controller('mainMenuController',function($scope,$http,$location){

			// Funcion inicializadora.
			($scope.init = ()=>{
				// Fecha
				$scope.date       = new Date();
				$scope.meses      = new Array ("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre");
				$scope.diasSemana = new Array("domingo","lunes","martes","miércoles","jueves","viernes","sábado");
				$scope.fecha      = "San Salvador de Jujuy, " + $scope.diasSemana[$scope.date.getDay()] + " " + $scope.date.getDate() + " de " + $scope.meses[$scope.date.getMonth()] + " de " + $scope.date.getFullYear();
				
				// Menu Bloques.
				$http
					.get('/rest/institucion.php/bloques')
					.success((json)=>{ if(json.result) $scope.bloques = json.rows; });
			})();

			$scope.strLocation = $location.url();
			$scope.strBuscar   = '';
			$scope.fncUpdateLocation = ()=>{ $scope.strLocation = $location.url(); };
		});