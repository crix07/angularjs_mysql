app.controller( 'alumnoCtrl', [ '$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {


    let codigo = $routeParams.codigo

    $scope.alumno = {}

    $http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo).then(function({data}) {
        console.log(data);
        
        if ( data.err !== undefined ) {
            window.location = '#!/alumnos'
            return;
        }

        $scope.alumno = data;
    })


}]);