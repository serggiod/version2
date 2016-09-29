angular
		.module('legislaturaweb')
		.controller('presidenciaController',function($scope,$http,$anchorScroll,$location){
			
			$scope.gotoAnchor = function(anchorID) {
				var newHash = 'anchor' + anchorID;
				if($location.hash() !== newHash) $location.hash('anchor' + anchorID);
				else $anchorScroll();
      		};

		});