angular.module('legislaturaweb',
	[
		'ngRoute'
		//addmodule.
	])
	.config(function($routeProvider){
	    $routeProvider
	    	.when('/',{
	    		redirectTo:'/home'
	    	})
			.when('/home',{
				templateUrl:'views/homeView.html',
				controller:'homeController'
			})
			.when('/presidencia',{
				templateUrl:'views/presidenciaView.html',
				controller:'presidenciaController'
			})
			.when('/autoridades',{
				templateUrl:'views/autoridadesView.html',
				controller:'autoridadesController'
			})
			.when('/diputados',{
				templateUrl:'views/diputadosView.html',
				controller:'diputadosController'
			})
			.when('/orden_del_dia',{
				templateUrl:'views/orden_del_diaView.html',
				controller:'orden_del_diaController'
			})
			.when('/poder_legislativo',{
				templateUrl:'views/poder_legislativoView.html',
				controller:'poder_legislativoController'
			})
			.when('/bloque/:strBloque',{
				templateUrl:'views/bloqueView.html',
				controller:'bloqueController'
			})
			.when('/labor_legislativa',{
				templateUrl:'views/labor_legislativaView.html',
				controller:'labor_legislativaController'
			})
			.when('/buscar/:strBuscar',{
				templateUrl:'views/buscarView.html',
				controller:'buscarController'
			})
			//addroute.
			.otherwise({redirectTo:'/home'});
	});