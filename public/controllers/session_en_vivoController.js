angular
		.module('legislaturaweb')
		.controller('session_en_vivoController',function($scope,$http,$rootScope,$window){
				// Inicializadora.
				$scope.init = ()=>{
					$window.scrollTo(0,0);
					$rootScope.mediabar=false;
				};
				//Inicializar.
				$scope.init();
		});