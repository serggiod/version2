angular
		.module('legislaturaweb')
		.controller('session_en_vivoController',function($scope,$http,$rootScope,$window,$location){
				// Inicializadora.
				$scope.init = ()=>{
					$rootScope.mediabar=false;
					if($location.path()==='/home') $rootScope.mediabar=true;
					$window.scrollTo(0,0);
				};
				//Inicializar.
				$scope.init();
		});