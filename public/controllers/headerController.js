angular
		.module('legislaturaweb')
		.controller('headerController',function($scope,$http){

			// Función inicializadora.
			($scope.init = ()=>{
				// Iniciar slide principal.
					$('#slidePrincipal').carousel({ interval: 4000, cycle: true });
			})();

		});