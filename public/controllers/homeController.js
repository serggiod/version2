angular
		.module('legislaturaweb')
		.controller('homeController',function($scope,$http,$rootScope){
		
			// función inicializadora.
			$scope.init = ()=>{
				$rootScope.mediaBar=true;
				$scope.getActividadDelDiaWidgetContent();
				$scope.getMarcosPazWidgetContent();
			};

			// Dialog Modal Actividad Del Dia.
			$scope.showDialogActividadDelDia = ()=>{
				dialog = BootstrapDialog.show({
					autodestroy:false,
					closable:false,
					nl2br:false,
					type:'type-info',
					title:'Actividad del D&iacute;a',
					message:$('#dialogActividadDelDia'),
					buttons:[{
						label: 'Cerrar',
						cssClass: 'btn-info',
						action:()=>{ dialog.close(); }
					}]
				});
			};

			//Dialog Modal Salon Marcos Paz.
			$scope.showDialogSalonMarcosPaz = ()=>{
				o = $('#dialogSalonMarcosPaz');
				console.log(o);
				dialog = BootstrapDialog.show({
					autodestroy:false,
					closable:false,
					nl2br:false,
					type:'type-info',
					title:'Salon Marcos Paz',
					message:o,
					buttons:[{
						label:'Cerrar',
						cssClass:'btn-info',
						action:()=>{ dialog.close(); }
					}]
				});
			};

			// Widget Content: Arctividad del Dia.
			$scope.getActividadDelDiaWidgetContent = ()=>{
				$http
					.get('/rest/home.php/actividad/actividad_del_dia')
					.success((json)=>{ if(json.result) $scope.actividadDelDiaContent=json.rows; })
					.error(()=>{ console.log('actividadDelDiaWidgetContent: no data;'); })
			};

			// Widget Content: Salon Marcos Paz.
			$scope.getMarcosPazWidgetContent = ()=>{
				$http
					.get('/rest/home.php/actividad/salon_marcos_paz')
					.success((json)=>{ if(json.result) $scope.salonMarcosPazContent=json.rows; })
					.error(()=>{ console.log('marcosPazWidgetContent: not data'); })
			}

			// Inicializar.
			$scope.init();
		});