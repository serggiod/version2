angular
		.module('legislaturaweb')
		.controller('presidenciaController',function($scope,$http,$rootScope,$anchorScroll,$location,$window){
			
			// Icialiadora.
			$scope.init = ()=>{
				$window.scrollTo(0,0);
				$rootScope.mediabar=false;
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