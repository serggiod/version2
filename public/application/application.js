angular.module('legislaturaweb',
	[
		'ngRoute'
		,'ngTouch'
		,'angular-carousel'
		,'mgcrea.ngStrap'
		,'ui.calendar'
		,'ngSanitize'
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
			.when('/leer-noticia/:uriname',{
				templateUrl:'views/leerNoticiaView.html',
				controller:'leerNoticiaController'
			})
			/*
			.when('/leer-noticia/todas/legislatura',{
				templateUrl:'views/leerNoticiaTodasLegislaturaView.html',
				controller:'leerNoticiaController'
			})
			.when('/leer-noticia/todas/diputados',{
				templateUrl:'views/leerNoticiaTodasDiputadosView.html',
				controller:'leerNoticiaController'
			})
			*/
			.when('/poder_legislativo',{
				templateUrl:'views/poder_legislativoView.html',
				controller:'poder_legislativoController'
			})
			.when('/labor_legislativa',{
				templateUrl:'views/labor_legislativaView.html',
				controller:'labor_legislativaController'
			})
			.when('/buscar/:strBuscar',{
				templateUrl:'views/buscarView.html',
				controller:'buscarController'
			})
			.when('/actividad/:dia/:mes/:anio',{
				templateUrl:'views/actividadView.html',
				controller:'actividadController'
			})
			

			// Media Bar.
			.when('/presidencia',{
				templateUrl:'views/presidenciaView.html',
				controller:'presidenciaController'
			})
			.when('/legislatura',{
				templateUrl:'views/legislaturaView.html',
				controller:'legislaturaController'
			})
			.when('/session_en_vivo',{
				templateUrl:'views/session_en_vivoView.html',
				controller:'session_en_vivoController'
			})


			// Autoridades.
			.when('/autoridades',{
				templateUrl:'views/autoridadesView.html',
				controller:'autoridadesController'
			})

			// Diputados.
			.when('/diputados',{
				templateUrl:'views/diputadosView.html',
				controller:'diputadosController'
			})

			// Comisiones.
			.when('/comision/:uriname',{
				templateUrl:'views/comisionView.html',
				controller:'comisionController'
			})

			// Labor Legislativa.
			.when('/orden-del-dia',{
				templateUrl:'views/orden_del_diaView.html',
				controller:'orden_del_diaController'
			})
			.when('/proyectos',{
				templateUrl:'views/proyectosView.html',
				controller:'proyectosController'
			})
			.when('/boletin-legislativo',{
				templateUrl:'views/boletinLegislativoView.html',
				controller:'boletinLegislativoController'
			})
			.when('/versiones-taquigraficas',{
				templateUrl:'views/versionesTaquigraficasView.html',
				controller:'versionesTaquigraficasController'
			})
			.when('/audiencias-publicas',{
				templateUrl:'views/audienciasPublicasView.html',
				controller:'audienciasPublicasController'
			})
			.when('/parlamento-juvenil',{
				templateUrl:'views/parlamentoJuvenilView.html',
				controller:'parlamentoJuvenilController'
			})
			.when('/acceso-a-leyes',{
				templateUrl:'views/accesoALeyesView.html',
				controller:'accesoALeyesController'
			})

			// Bloques.
			.when('/bloque/:uriname',{
				templateUrl:'views/bloqueView.html',
				controller:'bloqueController'
			})

			// Prensa
			.when('/prensa/noticias',{redirectTo:'/prensa/noticias/1'})
			.when('/prensa/noticias/:pagina',{
				templateUrl:'views/prensaNoticiasView.html',
				controller:'prensaNoticiasController'
			})
			.when('/prensa/fotografias',{redirectTo:'/prensa/fotografias/1'})
			.when('/prensa/fotografia/:fotografia',{
				templateUrl:'views/prensaFotografiaView.html',
				controller:'prensaFotografiaController'
			})

			// Transparencia
			.when('/resoluciones-y-concursos',{
				templateUrl:'views/resolucionesYConcursosView.html',
				controller:'resolucionesYConcursosController'
			})
			.when('/direccion-de-administracion',{
				templateUrl:'views/direccionDeAdministracionView.html',
				controller:'direccionDeAdministracionController'
			})
			.when('/inscripcion-para-proveedores',{
				templateUrl:'views/inscripcionParaProveedoresView.html',
				controller:'inscripcionParaProveedoresController'
			})
			.when('/nomina-del-personal',{
				templateUrl:'views/nominaDelPersonalView.html',
				controller:'nominaDelPersonalController'
			})
			.when('/listado-de-teslefonos-internos',{
				templateUrl:'views/listadoDeTeslefonosInternosView.html',
				controller:'listadoDeTeslefonosInternosController'
			})
			
			//addroute.
			.otherwise({redirectTo:'/home'});
	});