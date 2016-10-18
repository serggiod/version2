angular
		.module('legislaturaweb')
		.config(function($httpProvider) {
			$httpProvider.defaults.useXDomain = true;
		})
		.controller('orden_del_diaController',function($scope,$http){

				// Función inicializadora.
				$scope.init = ()=>{
					$('#mediaBar').hide();
					$scope.getOrdenes();
				};

				// Objeto para almacenar ordenes del día.
				$scope.ordenes = new Object();
				$scope.ordenes.rows = new Object();
				$scope.ordenes.keys = new Array();
				$scope.ordenes.getMinDate = ()=>{
					i = $scope.ordenes.keys.length -1;
					k = $scope.ordenes.keys[i];
					r = k.substring(0,4)+'-'+k.substring(4,6)+'-'+k.substring(6,8);
					return r;
				};
				$scope.ordenes.getMaxDate = ()=>{
					k = $scope.ordenes.keys[0];
					return k.substring(0,4)+'-'+k.substring(4,6)+'-'+k.substring(6,8);
				};

				// Traer lista de ordenes del día.
				$scope.getOrdenes = ()=>{
					$http
						.get('/rest/institucion.php/ordenes')
						.success((json)=>{
							if(json.result){
								$scope.procesarOrdenes(json.rows);
							}
						})
						.error(()=>{
							console.log('Error en petición.');
						});
				};

				// Procesar Ordenes.
				$scope.procesarOrdenes = (json)=>{
					for(i in json.all){
						key = json.all[i].date;
						subkey = json.all[i].tipo;
						if(!$scope.ordenes.rows[key]) $scope.ordenes.rows[key] = new Object;
						$scope.ordenes.rows[key][subkey] = json.all[i];
						$scope.ordenes.keys.push(key);
					}
					$scope.mindate  = $scope.ordenes.getMinDate();
					$scope.maxdate  = $scope.ordenes.getMaxDate();
					
					console.log($scope.mindate,$scope.maxdate);
				};

				$scope.init();

		});