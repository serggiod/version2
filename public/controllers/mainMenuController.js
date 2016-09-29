angular
		.module('legislaturaweb')
		.controller('mainMenuController',function($scope,$http,$location){

			$scope.strLocation = $location.url();
			$scope.strBuscar   = '';

			$scope.fncInit = ()=>{
				$http
					.get('http://www.legislaturajujuy.gov.ar/rest/institucion.php/bloques')
					.success((json)=>{ if(json.result) $scope.bloques = json.rows; });
			};

			$scope.fncUpdateLocation = ()=>{ $scope.strLocation = $location.url(); };

			$scope.fncInit();

		});