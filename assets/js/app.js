var app = angular.module("myApp", ['ngRoute']);

app.controller("AppCtrl", function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

app.config(function ($routeProvider, $locationProvider, $interpolateProvider) {

    $interpolateProvider.startSymbol('[[').endSymbol(']]');//Por causa do Jekyll

    $routeProvider.when('/', { templateUrl: 'home.html', controller: 'HomeCtrl' });
    $routeProvider.when('/users', { templateUrl: 'users.html', controller: 'UsersCtrl' });
    $routeProvider.when('/users/:id', { templateUrl: 'details_user.html', controller: 'UserCtrl' });
    $routeProvider.when('/posts/:id', { templateUrl: 'post.html', controller: 'PostCtrl' });
    $routeProvider.otherwise({ redirectTo: '/' });

    // configure html5 to get links working on jsfiddle
    // $locationProvider.html5Mode({ enabled: true, requireBase: false });
    // $locationProvider.hashPrefix('!');
});

