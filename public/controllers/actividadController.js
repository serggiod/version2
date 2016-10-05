angular
		.module('legislaturaweb')
		.controller('actividadController',function($scope,$http){
			$scope.init = ()=>{
				console.log('Eureka');s
				$http
					.get('/rest/version2.php/actividad')
					.success((json)=>{ console.log('Eureka'); });
			};
			$scope.init();
		});