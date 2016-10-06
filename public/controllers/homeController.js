angular
		.module('legislaturaweb')
		.controller('homeController',function($scope,$http,$modal){
			
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
					.get('/rest/home.php/actividad')
					.success((json)=>{ if(json.result) $scope.actividad = json.rows; });

				// Solicitamos ultimos boletines.
				$http
					.get('/rest/home.php/boletin')
					.success((json)=>{ if(json) $scope.boletin = json.rows; });

				$scope.scroll = true;
        		$scope.duration = 10000;
			};

			// Modal de actividad del día.
			$scope.showModalActivad = ()=>{
				title = 'Actividad del D&iacute;a';
				html  = '<img class="img-responsive" src="'+$scope.actividad.archivo+'" width="800" />';
				html += '<p class="titulo">'+$scope.actividad.nombre+'</p>';
				html += '<table border="1px" width="100%">';
				html += '<thead><tr>';
				html += '<th>Fecha</th>';
				html += '<th>Hora</th>';
				html += '<th>Contenido</th>';
				html += '<th>Requisitos</th>';
				html += '</tr></thead>';
				html += '<tbody>';
				html += '<tr><td>'+$scope.actividad.fecha+'</td>';
				html += '<td>'+$scope.actividad.hora+'</td>';
				html += '<td>'+$scope.actividad.descrip+'</td>';
				html += '<td>'+$scope.actividad.requi+'</td></tr>';
				html += '</tbody>';
				html += '</table>';
				var dialogActividad = BootstrapDialog.show({
					title:title,
					message:html,
					buttons:[{
						label: 'Cerrar',
        				cssClass: 'btn-primary',
						action:()=>{ dialogActividad.close(); }
					}]
				});
			};
			$scope.init();
		});