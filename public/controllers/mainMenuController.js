angular
		.module('legislaturaweb')
		.controller('mainMenuController',function($scope,$http){
			$http
				.get('http://www.legislaturajujuy.gov.ar/rest/institucion.php/bloques')
				.success(function(json){
					if(json.result){
						$scope.bloques = json.rows;
					}
				});
		});