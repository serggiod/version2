angular
		.module('legislaturaweb')
		.controller('homeController',function($scope,$http,$rootScope){
		
			// Rutas.
			$scope.routeToNoticiasDestacadas12         = '/rest/institucion.php/actualidad/legislatura/1';
			$scope.routeToNoticiasDestacadas3          = '/rest/institucion.php/actualidad/legislatura/2';
			$scope.routeToNoticiasDestacadasRojo       = '/rest/institucion.php/actualidad/diputados/1';
			$scope.routeToNoticiasTop4                 = '/rest/institucion.php/actualidad/top/1';
			$scope.routeToActividadDelDiaWidgetContent = '/rest/home.php/actividad/actividad_del_dia';
			$scope.routeToMarcosPazWidgetContent       = '/rest/home.php/actividad/salon_marcos_paz';

			// función inicializadora.
			$scope.init = ()=>{
				$rootScope.mediaBar=true;
				$scope.getActividadDelDiaWidgetContent();
				$scope.getMarcosPazWidgetContent();
				$scope.getNoticiasDestacadas12Content();
				$scope.getNoticiasDestacadas3Content();
				$scope.getNoticiasDestacadasRojo();
				$scope.getNoticiasTop4();
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
					.get($scope.routeToActividadDelDiaWidgetContent)
					.success((json)=>{ if(json.result) $scope.actividadDelDiaContent=json.rows; })
					.error(()=>{ console.log($scope.routeToActividadWidgetContent+' : no data;'); })
			};

			// Widget Content: Salon Marcos Paz.
			$scope.getMarcosPazWidgetContent = ()=>{
				$http
					.get($scope.routeToMarcosPazWidgetContent)
					.success((json)=>{if(json.result) $scope.salonMarcosPazContent=json.rows;})
					.error(()=>{console.log($scope.routeToMarcosPazWidgetContent+' : not data');})
			};

			// Widget Content: Noticias Destacadas 1.
			// WIdget Content: Noticias Destacadas 2.
			$scope.getNoticiasDestacadas12Content = ()=>{
				$http
					.get($scope.routeToNoticiasDestacadas12)
					.success((json)=>{ if(json.result) $scope.noticiasDestacadas12Content=json.rows;})
					.error(()=>{console.log($scope.routeToNoticiasDestacadas12+' : No Data');});
			};

			// Widget Content: Notocias Destacadas 3.
			$scope.getNoticiasDestacadas3Content = ()=>{
				$http
					.get($scope.routeToNoticiasDestacadas3)
					.success((json)=>{ if(json.result) $scope.noticiasDestacadas3Content=json.rows;})
					.error(()=>{console.log($scope.routeToNoticiasDestacadas12+' : No Data');});
			};

			// Widget Content: Noticias Destacas en Rojo.
			$scope.getNoticiasDestacadasRojo = ()=>{
				$http
					.get($scope.routeToNoticiasDestacadasRojo)
					.success((json)=>{ if(json.result) $scope.noticiasDestacadasRojo=json.rows;})
					.error(()=>{$scope.routeToNoticiasDestacadasRojo+' : No Data'});
			};

			// Widget Content: Noticias Top 4.
			$scope.getNoticiasTop4 = ()=>{
				$http
					.get($scope.routeToNoticiasTop4)
					.success((json)=>{ if(json.result) $scope.noticiasTop4=json.rows;})
					.error(()=>{$scope.routeToNoticiasTop4+' : No Data'});
			};

			// Inicializar.
			$scope.init();
		});