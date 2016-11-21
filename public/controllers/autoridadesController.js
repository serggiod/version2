angular
		.module('legislaturaweb')
		.controller('autoridadesController',function($scope,$rootScope,$http,$window){
			// Inicializadora.
			$scope.init = ()=>{
				$window.scrollTo(0,0);
				$rootScope.mediaBar=false;
				$scope.resetVars();
				$scope.showPresidente();
			};

			// Resetear variables.
			$scope.resetVars = ()=>{
				$scope.varPresidente = false;
				$scope.varVicePresidente1 = false;
				$scope.varVicePresidente2 = false;
				$scope.varSecParla = false;
				$scope.varSecAdmin = false;
			};

			// Mostrar páginas.
			$scope.showPresidente 		= ()=>{$scope.resetVars();$scope.varPresidente=true;};
			$scope.showVicepresidente1 	= ()=>{$scope.resetVars();$scope.varVicePresidente1=true;};
			$scope.showVicepresidente2 	= ()=>{$scope.resetVars();$scope.varVicePresidente2=true;};
			$scope.showSecParla 		= ()=>{$scope.resetVars();$scope.varSecParla=true;};
			$scope.showSecAdmin 		= ()=>{$scope.resetVars();$scope.varSecAdmin=true;};
			
			// Inicializar.
			$scope.init();
		});