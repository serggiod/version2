angular
		.module('legislaturaweb')
		.controller('diputadosController',function($scope,$http,$window){
			 // Rutas.
			 $scope.routeToDiputadosContent = '/rest/institucion.php/diputados';

			 // Inicilizador.
			 $scope.init = ()=>{
				 $window.scrollTo(0,0);
				 $scope.getWidgetContentDiputados();
			 };

			 // Widget Content: Diputados.
			 $scope.getWidgetContentDiputados = ()=>{
				 $http
				 	.get($scope.routeToDiputadosContent)
					.success((json)=>{if(json.result) $scope.diputadosContent = json.rows;})
					.error(()=>{ console.log($scope.routeToDiputadosContent+' : No Data');});
			 };

			 // Inicializar.
			 $scope.init();
		});