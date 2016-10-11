angular
		.module('legislaturaweb')
		.controller('homeController',function($scope,$http,$modal,$location){
			
			// función inicializadora.
			$scope.init = ()=>{

				// Solicitar ultima actividad.
				$http
					.get('/rest/home.php/actividad')
					.success((json)=>{ if(json.result) $scope.actividad = json.rows; });

				// Solicitamos ultimos boletines.
				$http
					.get('/rest/home.php/boletin')
					.success((json)=>{
						if(json){
							$scope.boletin = json.rows;
							$('#scrollBoletin').marquee({
								enable : true,  // activa plug-in
								direction: 'vertical', //direccion de scroll
								itemSelecter : 'li',  //selecciona hijos
								delay: 3000, //tiempo de espera
								speed: 1, //velocidad
								timing: 1,
								mouse: true //si se detiene al pasar el mouse
							});
						}
					});

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

			// Modal para mostrar un Boletín Legislativo.
			$scope.showModalBoletin = (t)=>{
				showModalBoletin = BootstrapDialog.show({
					title:'BOLETÍN LEGISLATIVO '+t,
					message:'<object type="application/pdf" data="boletin/boletin_ejemplo.pdf" width="100%" height="500" style="height: 85vh;"></object>',
					closable:false,
					buttons:[{
						label:'Cerrar',
						cssClass:'btn-primary',
						action:()=>{ showModalBoletin.close(); }
					}]
				});
			};

			// Modal para mostrar infomación del Boletín Legislativo.
			$scope.showModalBoletinInfo = ()=>{
				$http
					.get('views/home/_boletinInformacion.html')
					.success((html)=>{
						showModalBoletinInfo = BootstrapDialog.show({
							closable:false,
							title:'Informaci&oacute;n sobre el Bolet&iacute;n Informativo',
							message:html,
							buttons:[{
								label:'Cerrar',
								cssClass:'btn btn-primary',
								action:()=>{ showModalBoletinInfo.close(); }
							}]
						});
					});
			};

			// goTo controller buscarBoletin.
			$scope.gotoBuscarBoletin = ()=>{ $location.path('/buscarBoletin'); };

			$scope.init();
		});