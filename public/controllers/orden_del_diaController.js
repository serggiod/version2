angular
		.module('legislaturaweb')
		.controller('orden_del_diaController',function($scope,$rootScope,$http,$window,$location){

				// Rutas.
				$scope.routeToOrdenes = '/rest/institucion.php/ordenes';

				// Función inicializadora.
				$scope.init = ()=>{
					$rootScope.mediabar=false;
					if($location.path()==='/home') $rootScope.mediabar=true;	
					$window.scrollTo(0,0);
					$scope.getOrdenes();
				};

				// Imprimir.
				$scope.imprimir = (file)=>{
					uri = '/img/sesiones/'+file;
					win = window.open(uri);
					win.onload = ()=>{
						win.print();
						win.close();
					};
				};

				$scope.showOrdinarias = ()=>{
					$scope.titulo = 'Sessiones Ordinarias';
					$scope.inshow = $scope.ordenes.ordinaria;
				};
				$scope.showExtraordinarias = ()=>{
					$scope.titulo = 'Sessiones Extraordianrias';
					$scope.inshow = $scope.ordenes.extraordinaria;
				};
				$scope.showEspeciales = ()=>{
					$scope.titulo = 'Sessiones Especiales';
					$scope.inshow = $scope.ordenes.especial;
				};
				$scope.showPreparatorias = ()=>{
					$scope.titulo = 'Sessiones Preparatorias';
					$scope.inshow = $scope.ordenes.preparatoria;
				};
				$scope.showParlamentoJuvenil = ()=>{
					$scope.titulo = 'Sessiones del Parlamento Juvenil';
					$scope.inshow = $scope.ordenes.juvenil;
				};
				$scope.showTodas = ()=>{
					$scope.titulo = 'De Todas las Sesiones';
					$scope.inshow = $scope.ordenes.all;
				};
				// Inicializar calendario.
				$scope.getOrdenes = ()=>{
					$http
						.get($scope.routeToOrdenes)
						.success((json)=>{
							if(json.result){
								$scope.ordenes = json.rows;
								$scope.showOrdinarias();
							}
						})
						.error(()=>{console.log($scope.routeToOrdenes+' : No Data');});
				};

				// Inicializar.
				$scope.init();

		});