angular.module('legislaturaweb',
	[
		'ngRoute'
		,'ngTouch'
		,'angular-carousel'
		,'mgcrea.ngStrap'
		,'ui.calendar'
		//addmodule.
	])
	.config(function($routeProvider,$httpProvider){
		if(!$httpProvider.defaults.headers.get) $httpProvider.defaults.headers.get = {};
		$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
		$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
		$httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
		
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
			.when('/legislatura',{
				templateUrl:'views/legislaturaView.html',
				controller:'legislaturaController'
			})
			.when('/session_en_vivo',{
				templateUrl:'views/session_en_vivoView.html',
				controller:'session_en_vivoController'
			})
			.when('/actividad/:dia/:mes/:anio',{
				templateUrl:'views/actividadView.html',
				controller:'actividadController'
			})
			.when('/boletin_legislativo',{
				templateUrl:'views/boletinLegislativoView.html',
				controller:'boletinLegislativoController'
			})
			//addroute.
			.otherwise({redirectTo:'/home'});
	});