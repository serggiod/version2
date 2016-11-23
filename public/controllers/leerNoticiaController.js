angular
		.module('legislaturaweb')
		.controller('leerNoticiaController',function($scope,$http,$rootScope,$routeParams,$window,$location){
		
			// Rutas.
			$scope.routeToLeerNoticia = '/rest/institucion.php/leer-noticia/'+$routeParams.uriname;

			// función inicializadora.
			$scope.init = ()=>{
				$rootScope.mediabar=false;
				if($location.path()==='/home') $rootScope.mediabar=true;
				$window.scrollTo(0,0);
				$scope.getLeerNoticiaContent();
			};

			// Widget Content: Leer Noticia.
			$scope.getLeerNoticiaContent = ()=>{
				$http
					.get($scope.routeToLeerNoticia)
					.success((json)=>{ if(json.result) $scope.leerNoticia=json.rows; })
					.error(()=>{ console.log($scope.routeToLeerNoticia+' : no data;'); })
			};

				// Inicializar.
			$scope.init();
		});