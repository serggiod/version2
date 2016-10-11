angular
		.module('legislaturaweb')
		.controller('buscarBoletinController',function($scope,$http){
			// Función inicializadora.
			($scope.init=()=>{
				$scope.boletinShow = false;
			})();

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
			
		});