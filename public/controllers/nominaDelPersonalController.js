angular
.module('legislaturaweb')
.controller('nominaDelPersonalController',function($scope,$rootScope,$http,$window,$location){

		// Ruta.
		$scope.routeToPersonal = '/rest/institucion.php/personal';

		// Inicializadora.
		$scope.init = ()=>{
			$rootScope.mediabar=false;
			if($location.path()==='/home') $rootScope.mediabar=true;
			$window.scrollTo(0,0);
			$scope.getPersonal();
		};

		// Traer personal.
		$scope.getPersonal = ()=>{
			$http
				.get($scope.routeToPersonal)
				.success((json)=>{if(json.result) $scope.personal=json.rows;})
				.error(()=>{console.log($scope.routeToPersonal+' : No Data');});
		};

		// Inicializador.
		$scope.init();
});