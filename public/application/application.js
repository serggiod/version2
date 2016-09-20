angular
	.module('legislaturaweb',['ngAnimate','ngRoute'])
	.config(function($routeProvider){
	    $routeProvider
	    	.when('/',{
	    		redirectTo:'/home'
	    	})
	    	.when('/home',{
	    		templateUrl:'views/home.html',
	    		controller:'home'
	    	})
			// add routes.
		    .otherwise({redirectTo:'/home'});
	});