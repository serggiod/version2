angular
.module('legislaturaweb')
.controller('bloqueController',function($scope,$http,$rootScope,$routeParams,$window){
	
	// Rutas.
	$scope.routeToBloqueContent = '/rest/institucion.php/bloque/'+$routeParams.uriname;

	// Inicializadora.
	$scope.init = ()=>{
		$window.scrollTo(0,0);
		$rootScope.mediabar=false;
		$scope.resetVars();
		$scope.getBloqueContent();
	};

	$scope.showDiputados   = ()=>{ $scope.resetVars(); $scope.varShowDiputados    = true; };
	$scope.showPincipios   = ()=>{ $scope.resetVars(); $scope.varShowPrincipios   = true; };
	$scope.showHistoria    = ()=>{ $scope.resetVars(); $scope.varShowHistoria     = true; };
	$scope.showAutoridades = ()=>{ $scope.resetVars(); $scope.varShowAutoridades  = true; };
	$scope.showEmails      = ()=>{ $scope.resetVars(); $scope.varShowEmails       = true; };
	$scope.showTelefonos   = ()=>{ $scope.resetVars(); $scope.varShowTelefonos    = true; };
	$scope.showDireccion   = ()=>{ $scope.resetVars(); $scope.varShowDireccion    = true; };
	$scope.showAlianzas    = ()=>{ $scope.resetVars(); $scope.varShowAlianzas     = true; };
	$scope.showPartidos    = ()=>{ $scope.resetVars(); $scope.varShowPartidos     = true; };

	$scope.resetVars = ()=>{
		$scope.varShowDiputados    = false;  
		$scope.varShowPrincipios   = false;  
		$scope.varShowHistoria     = false;   
		$scope.varShowAutoridades  = false;
		$scope.varShowEmails       = false;     
		$scope.varShowTelefonos    = false;  
		$scope.varShowDireccion    = false;  
		$scope.varShowAlianzas     = false;    
		$scope.varShowPartidos     = false;   
	};

	// Widget Content: Bloque.
	$scope.getBloqueContent = ()=>{
		$http
			.get($scope.routeToBloqueContent)
			.success((json)=>{
				if(json.result){
					$scope.bloqueContent=json.rows;
					$scope.showDiputados();
				}
			})
			.error(()=>{console.log($scope.routeToBloqueContent+' : No Data');});
	};

	//Inicilizar.
	$scope.init();		
});