angular
		.module('legislaturaweb')
		.controller('diputadosController',function($scope,$http){
			 // Rutas.
			 $scope.routeToDiputadosContent = '/rest/institucion.php/diputados';

			 // Inicilizador.
			 $scope.init = ()=>{
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