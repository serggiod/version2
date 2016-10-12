angular
		.module('legislaturaweb')
		.controller('homeController',function($scope,$http,$modal,$location){
			
			// función inicializadora.
			$scope.init = ()=>{

				// Mostrar media bar.
				$('#mediaBar').show();
				
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
				$http
					.get('views/home/dialogs/actividad.del.dia.html')
					.success((html)=>{
						message = html
							.replace('{{archivo}}',$scope.actividad.archivo)
							.replace('{{nombre}}',$scope.actividad.nombre)
							.replace('{{fecha}}',$scope.actividad.fecha)
							.replace('{{hora}}',$scope.actividad.hora)
							.replace('{{descrip}}',$scope.actividad.descrip)
							.replace('{{requi}}',$scope.actividad.requi);
						dialog = BootstrapDialog.show({
							closable:false,
							type:'type-info',
							nl2br:false,
							title:'Actividad del D&iacute;a',
							message:message,
							buttons:[{
								label: 'Cerrar',
								cssClass: 'btn-info',
								action:()=>{ dialog.close(); }
							}]
						});
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
					.get('views/home/dialogs/boletin.legislativo.informacion.html')
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