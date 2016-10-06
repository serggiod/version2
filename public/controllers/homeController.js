angular
		.module('legislaturaweb')
		.controller('homeController',function($scope,$http){
			
			// función inicializadora.
			$scope.init = ()=>{

				$('#scrollBoletin').marquee({
					enable : true,  // activa plug-in
					direction: 'vertical', //direccion de scroll
					itemSelecter : 'li',  //selecciona hijos
					delay: 3000, //tiempo de espera
					speed: 1, //velocidad
					timing: 1,
					mouse: true //si se detiene al pasar el mouse
				});

				// Solicitar ultima actividad.
				$http
					.get('/rest/version2.php/actividad')
					.success((json)=>{ if(json.result) $scope.actividad = json.rows; });
			};

			// Modal de actividad del día.
			$scope.modal = {
				'title'   : 'Title',
				'content' : 'Hello Modal<br />This is a multiline message!'
			};

			$scope.init();

		});