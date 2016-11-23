angular
		.module('legislaturaweb')
		.controller('presidenciaController',function($scope,$http,$rootScope,$anchorScroll,$location,$window){
			
			// Icialiadora.
			$scope.init = ()=>{
				$rootScope.mediabar=false;
				if($location.path()==='/home') $rootScope.mediabar=true;
				$window.scrollTo(0,0);
			};

			// Iniclializar
			$scope.init();

			// Got to anchor.
			$scope.gotoAnchor = function(anchorID) {
				var newHash = 'anchor' + anchorID;
				if($location.hash() !== newHash) $location.hash('anchor' + anchorID);
				else $anchorScroll();
      		};

		});