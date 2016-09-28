angular
		.module('legislaturaweb')
		.controller('mediaBarController',function($scope,$http){
            $scope.date       = new Date();
            $scope.meses      = new Array ("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre");
            $scope.diasSemana = new Array("domingo","lunes","martes","miércoles","jueves","viernes","sábado");
            $scope.fecha      = "San Salvador de Jujuy, " + $scope.diasSemana[$scope.date.getDay()] + " " + $scope.date.getDate() + " de " + $scope.meses[$scope.date.getMonth()] + " de " + $scope.date.getFullYear();
		});