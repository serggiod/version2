angular
		.module('legislaturaweb')
		.controller('diputadosController',function($scope,$http,$window,$rootScope,$location){
			 // Rutas.
			 $scope.routeToDiputadosContent = '/rest/institucion.php/diputados';

			 // Inicilizador.
			 $scope.init = ()=>{
				 $rootScope.mediabar=false;
				 if($location.path()==='/home') $rootScope.mediabar=true;
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