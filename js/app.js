var app = angular.module('universidadApp', ['ngRoute', 'ui.mask']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
    $scope.titleApp = 'Universidad App'
    $scope.header = 'partials/header.html'

    $scope.phoneMask = "+1 (999) 999-9999"

    $scope.setActive = function(Option) {


        $scope.mInicio      = ""
        $scope.mProfesores  = ""    
        $scope.mAlumnos     = ""    

        $scope[Option] = "active"

    }

}]);

app.filter('telefono', function() {
    return (number) => `+1 (${number.substring(0, 3)}) ${number.substring(3, 6)}-${number.substring(6)}`;
})