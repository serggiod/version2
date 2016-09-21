angular.module('legislaturaweb',['ngRoute'])
	.config(function($routeProvider){
	    $routeProvider
	    	.when('/',{
	    		redirectTo:'/home'
	    	})
			.when('/noticias',{
				templateUrl:'views/noticiasView.html',
				controller:'noticiasController'
			})
			.otherwise({redirectTo:'/home'});
	});