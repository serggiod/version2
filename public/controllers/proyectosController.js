angular
		.module('legislaturaweb')
		.controller('proyectosController',function($scope,$http){

			// Rutas.
			$scope.routeToDiputados = '/rest/institucion.php/diputados';

			// DateY.
			date = new Date();
			$scope.actualYear = date.getFullYear();

			// Filtros.
			$scope.filtroExpediente = 'null';
			$scope.filtroLetra      = 'null';
			$scope.filtroKeyword    = 'null';
			$scope.filtroDateY      = 'null';
			$scope.filtroDiputado   = 'null';
			$scope.filtroOrden      = 'DE';

			// Paginador.
			$scope.pagCurr  = 1;
			$scope.pagFirst = 1;
			$scope.pagLast  = 1;
			$scope.pagNext  = 1;
			$scope.pagPrev  = 1;

			// Inicializador.
			$scope.formInit = ()=>{
				$scope.getDiputados();
				$scope.getProyectsFromRest();
			}
			
			// Lista de Diputados.
			$scope.getDiputados = ()=>{
				$http
					.get($scope.routeToDiputados)
					.success((json)=>{if(json.result) $scope.diputados=json.rows;})
					.error(()=>{console.log($scope.routeToDiputados+' : No Data');});
			};

			// Cambiar expediente.
			$scope.onchangeExpediente = ()=>{
				if($scope.filtroExpediente=='')	$scope.filtroExpediente = 'null';
			};

			// Al cambiar la letra.
			$scope.onchangeLetra = ()=>{
				if($scope.filtroLetra=='') $scope.filtroLetra = 'null';
			};

			// Al cambiar la palabra clave.
			$scope.onchangeKeyword = ()=>{
				if($scope.filtroKeyword=='') $scope.filtroKeyword = 'null';
			};

			// Al cambiar el año.
			$scope.onchangeDateY = ()=>{
				if($scope.filtroDateY=='') $scope.filtroDateY = 'null';
			};

			// Aplicar filtros.
			$scope.filterApply = ()=>{
				$scope.pagCurr=$scope.pagFirst;
				$scope.getProyectsFromRest();
			};

			// Resetear filtros.
			$scope.filterReset = ()=>{
				$scope.filtroExpediente = 'null';
				$scope.filtroLetra      = 'null';
				$scope.filtroKeyword    = 'null';
				$scope.filtroDateY      = 'null';
				$scope.filtroDiputado   = 'null';
				$scope.filtroOrden      = 'DE';
				$scope.pagCurr		 = 1;
				$scope.pagFirst	 	 = 1;
				$scope.pagLast		 = 1;
				$scope.pagNext		 = 1;
				$scope.pagPrev		 = 1;
				$scope.getProyectsFromRest();
			};

			// Mover Primero.
			$scope.moveFirst = ()=>{
				$scope.pagCurr=$scope.pagFirst;
				$scope.getProyectsFromRest();
			};

			// Mover Anteerior.
			$scope.movePrev = ()=>{
				$scope.pagCurr=$scope.pagPrev;
				$scope.getProyectsFromRest();
			};

			// Mover Siguiente.
			$scope.moveNext = ()=>{
				$scope.pagCurr=$scope.pagNext;
				$scope.getProyectsFromRest();
			};

			// Mover Ultimo.
			$scope.moveLast = ()=>{
				$scope.pagCurr=$scope.pagLast;
				$scope.getProyectsFromRest();
			};

			// Opterner proyectos.
			$scope.getProyectsFromRest = ()=>{
				uri  = '/rest/institucion.php/proyectos';
				uri += '/'+$scope.pagCurr; // Posicion del paginador.
				uri += '/'+$scope.filtroExpediente; // Valor del filtro 'expediente'.
				uri += '/'+$scope.filtroLetra; // Valor del filtro 'letra'.
				uri += '/'+$scope.filtroKeyword; // Valor del filtro 'keyword'.
				uri += '/'+$scope.filtroDateY; // Valor del filtro 'dateY'.
				uri += '/'+$scope.filtroDiputado; // Valor del filtro 'diputado'.
				uri += '/'+$scope.filtroOrden; // Valor del filtro 'orden'.

				$http
					.get(uri)
					.success((json)=>{
						if(json.result){
							$scope.proyectos=json.rows.proyectos;
							$scope.pagFirst = json.rows.paginador.first;
							$scope.pagPrev  = json.rows.paginador.prev;
							$scope.pagCurr  = json.rows.paginador.curr;
							$scope.pagNext  = json.rows.paginador.next;
							$scope.pagLast  = json.rows.paginador.last;
						}
					})
					.error(()=>{console.log(uri+' : No Data');});

			};

			// Inicializar.
			$scope.formInit();

		});

    


	
	






