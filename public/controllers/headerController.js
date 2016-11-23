angular
		.module('legislaturaweb')
		.controller('headerController',function($scope,$http,$rootScope,$location){

			// Función inicializadora.
			($scope.init = ()=>{
				$rootScope.mediabar=false;
				if($location.path()==='/home') $rootScope.mediabar=true;
				$('#slidePrincipal').carousel({ interval: 4000, cycle: true });
			})();

		});