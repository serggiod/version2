angular
.module('legislaturaweb')
.controller('mediaBarController',function($scope,$rootScope,$http,$location){
	$rootScope.mediabar=false;
			if($location.path()==='/home') $rootScope.mediabar=true;
});