app.config( function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'initCtrl'
        })
        .when('/profesores', {
            templateUrl: 'partials/profesores.html',
            controller: 'profesoresCtrl'
        })
        .when('/alumnos', {
            templateUrl: 'partials/alumnos.html',
            controller: 'alumnosCtrl'
        })
        .when('/alumno/:codigo', {
            templateUrl: 'partials/alumno.html',
            controller: 'alumnoCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

})