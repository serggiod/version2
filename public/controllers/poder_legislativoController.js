angular
		.module('legislaturaweb')
		.controller('poder_legislativoController',function($scope,$rootScope,$http,$window,$location){
				// Inicializadora.
				$scope.init = ()=>{
					$rootScope.mediabar=false;
					if($location.path()==='/home') $rootScope.mediabar=true;
					$window.scrollTo(0,0);
				};

				// Inicializador.
				$scope.init();
		});