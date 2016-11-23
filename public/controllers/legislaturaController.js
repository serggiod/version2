angular
		.module('legislaturaweb')
		.controller('legislaturaController',function($scope,$http,$rootScope,$location){
				$rootScope.mediabar=false;
				if($location.path()==='/home') $rootScope.mediabar=true;
		});