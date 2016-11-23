angular
		.module('legislaturaweb')
		.controller('labor_legislativaController',function($scope,$http,$rootScope,$location){
				// Mostrar media bar.
				$rootScope.mediabar=false;
				if($location.path()==='/home') $rootScope.mediabar=true;
		});