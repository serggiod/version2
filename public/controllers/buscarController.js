angular
		.module('legislaturaweb')
		.controller('buscarController',function($scope,$http,$rootScope,$window){
				// Inicializadora.
				$scope.init = ()=>{
					$window.scrollTo(0,0);
					$rootScope.mediabar=false;
				};

				// Inicilizar.
				$scope.init();
		});