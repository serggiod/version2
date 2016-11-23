angular
		.module('legislaturaweb')
		.controller('buscarController',function($scope,$http,$rootScope,$window,$location){
				// Inicializadora.
				$scope.init = ()=>{
					$rootScope.mediabar=false;
					if($location.path()==='/home') $rootScope.mediabar=true;
					$window.scrollTo(0,0);
				};

				// Inicilizar.
				$scope.init();
		});