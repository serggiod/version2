angular
		.module('legislaturaweb')
		.controller('actividadController',function($scope,$http,$rootScope){
			$rootScope.mediabar=false;
			if($location.path()==='/home') $rootScope.mediabar=true;
		});