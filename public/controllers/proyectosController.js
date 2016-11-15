angular
		.module('legislaturaweb')
		.controller('proyectosController',function($scope,$http){

			// Rutas.
			$scope.routeToDiputados = '/rest/institucion.php/diputados';

			// DateY.
			date = new Date();
			$scope.actualYear = date.getFullYear();

			// Filtros.
			$scope.filtroOrden = 'DE';

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

			// Aplicar filtros.
			$scope.filterApply = ()=>{
				$scope.pagCurr=$scope.pagFirst;
				$scope.getProyectsFromRest();
			};

			// Resetear filtros.
			$scope.filterReset = ()=>{
				$scope.filtroExpediente = undefined;
				$scope.filtroLetra      = undefined;
				$scope.filtroKeyword    = undefined;
				$scope.filtroDateY      = undefined;
				$scope.filtroDiputado   = undefined;
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

				// Valor del filtro 'expediente'.
				if($scope.filtroExpediente==undefined) uri += '/null';
				else uri += '/'+$scope.filtroExpediente;

				// Valor del filtro 'letra'.
				if($scope.filtroLetra==undefined) uri += '/null';
				else uri += '/'+$scope.filtroLetra;

				// Valor del filtro 'keyword'.
				if($scope.filtroKeyword==undefined) uri += '/null';
				else uri += '/'+$scope.filtroKeyword;

				// Valor del filtro 'dateY'.
				if($scope.filtroDateY==undefined) uri += '/null';
				else uri += '/'+$scope.filtroDateY;

				// Valor del filtro 'diputado'.
				if($scope.filtroDiputado==undefined) uri += '/null';
				else uri += '/'+$scope.filtroDiputado;

				// Valor del filtro 'orden'.
				uri += '/'+$scope.filtroOrden; 

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

    


	
	






