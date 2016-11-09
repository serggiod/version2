angular
		.module('legislaturaweb')
		.controller('boletinLegislativoController',function($scope,$http,$rootScope,$location){
			
			// Routes.
			$scope.routeToBoletin = '/rest/home.php/boletin';

			// Función inicializadora.
			$scope.init = ()=>{
				$rootScope.mediaBar=false;
				$scope.getBoletinInformativoContent();
			};

			// Buscar un boletín.
			$scope.boletinBuscar = ()=>{
				if($scope.fecha===undefined){
					alert = BootstrapDialog.show({
						closable:false,
						type:'type-danger',
						title:'Error',
						message:'Debe ingresar una fecha para buscar el Boletín Legislativo.',
						buttons:[{
							label:'Cerrar',
							cssClass:'btn btn-danger',
							action:()=>{ alert.close(); }
						}]
					});
				}
				else {
					$scope.boletin     = 'boletin_ejemplo.pdf';
					$scope.boletinShow = true;
				}
			};

			// Cerrar el boletin.
			$scope.boletinCerrar = ()=>{
				$scope.boletinShow = false;
				$scope.boletin     = undefined;
				$scoep.fecha       = undefined;
				$('.date').value='';
			};




			// Modal para mostrar un Boletín Legislativo.
			$scope.showDialogBoletinLegislativoFloat = ()=>{
				dialog = BootstrapDialog.show({
					autodestroy:false,
					closable:false,
					nl2br:false,
					size:'size-wide',
					title:'BOLETÍN LEGISLATIVO ',
					message:'<object type="application/pdf" data="boletin/boletin_ejemplo.pdf" width="100%" height="500" style="height: 85vh;"></object>',
					buttons:[{
						label:'Cerrar',
						cssClass:'btn-primary',
						action:()=>{ dialog.close(); }
					}]
				});
			};

			// Dialog Boletin Informativo Info.
			$scope.showDialogBoletinInformativoInformation = ()=>{
				dialog = BootstrapDialog.show({
					autodestroy:false,
					closable:false,
					nl2br:false,
					title:'Informaci&oacute;n sobre el Bolet&iacute;n Informativo',
					message:$('#dialogBoletinLegislativoInformation'),
					buttons:[{
						label:'Cerrar',
						cssClass:'btn btn-primary',
						action:()=>{ dialog.close(); }
					}]
				});
			};

			// Dialog Boletin Legislativo Go Page.
			$scope.showDialogBoletinLegislativoGoPage = ()=>{ $location.path('/boletin_legislativo'); };

			// Get Content.
			$scope.getBoletinInformativoContent = ()=>{
				$http
					.get($scope.routeToBoletin)
					.success((json)=>{ if(json.result) $scope.boletinInformativoContent=json; })
					.error(()=>{ console.log($scope.routeToBoletin+': No Data'); })
			};

			// Inicializar.
			$scope.init();
		});