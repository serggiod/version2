angular
		.module('legislaturaweb')
		.controller('homeController',function($scope,$http,$rootScope){
		
			// Rutas.
			$scope.routeToNoticiasDestacadas12 = ' http://www.legislaturajujuy.gov.ar/rest/institucion.php/actua/legislatura/1';
			$scope.routeToNoticiasDestacadas3  = ' http://www.legislaturajujuy.gov.ar/rest/institucion.php/actua/legislatura/2';

			// función inicializadora.
			$scope.init = ()=>{
				$rootScope.mediaBar=true;
				$scope.getActividadDelDiaWidgetContent();
				$scope.getMarcosPazWidgetContent();
				$scope.getNoticiasDestacadas12Content();
				$scope.getNoticiasDestacadas3Content();
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
			};

			// Widget Content: Noticias Destacadas 1.
			// WIdget Content: Noticias Destacadas 2.
			$scope.getNoticiasDestacadas12Content = ()=>{
				$http
					.get($scope.routeToNoticiasDestacadas12)
					.success((json)=>{ if(json.result) {$scope.noticiasDestacadas12Content=json.rows; console.log(json); } })
					.error(()=>{ console.log($scope.routeToNoticiasDestacadas12+' : No Data'); });
			};

			// Widget Content: Notocias Destacadas 3.
			$scope.getNoticiasDestacadas3Content = ()=>{
				$http
					.get($scope.routeToNoticiasDestacadas3)
					.success((json)=>{ if(json.result) {$scope.noticiasDestacadas3Content=json.rows; console.log(json); } })
					.error(()=>{ console.log($scope.routeToNoticiasDestacadas12+' : No Data'); });
			};
			// Inicializar.
			$scope.init();
		});