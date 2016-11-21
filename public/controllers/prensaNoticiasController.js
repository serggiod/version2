angular
		.module('legislaturaweb')
		.controller('prensaNoticiasController',function($scope,$rootScope,$http,$window){
				// Inicializadora.
				$scope.init = ()=>{
					$window.scrollTo(0,0);
					$rootScope.mediabar = false;
				};

				// Inicializar.
				$scope.init();
		});