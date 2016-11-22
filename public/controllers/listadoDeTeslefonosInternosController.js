angular
		.module('legislaturaweb')
		.controller('listadoDeTeslefonosInternosController',function($scope,$rootScope,$http,$window){
				// Inicializadora.
				$scope.init = ()=>{
					$window.scrollTo(0,0);
					$rootScope.mediabar = false;
				};

				// Inicializador.
				$scope.init();
		});