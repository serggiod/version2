angular
		.module('legislaturaweb')
		.controller('leerNoticiaController',function($scope,$http,$rootScope,$routeParams,$window){
		
			// Rutas.
			$scope.routeToLeerNoticia = '/rest/institucion.php/leer-noticia/'+$routeParams.uriname;

			// función inicializadora.
			$scope.init = ()=>{
				$window.scrollTo(0,0);
				$rootScope.mediaBar=false;
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