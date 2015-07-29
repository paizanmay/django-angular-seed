'use strict';
// Declare app level module which depends on filters, and services

var resolve = { //when state change run this
  delay: function($q, $timeout) {
    // console.log("delay");
    var delay = $q.defer();
    $timeout(delay.resolve, 0, false);
    return delay.promise;
  }
};

var app = angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ngCookies',
    'ui.bootstrap',
])
.config(function($routeProvider, $interpolateProvider, $locationProvider, $resourceProvider, $httpProvider, $urlRouterProvider, $stateProvider) {
    // $locationProvider.html5Mode(true).hashPrefix('!');
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
    $resourceProvider.defaults.stripTrailingSlashes = false;

    $urlRouterProvider.otherwise("/mainpage");

    $stateProvider
        .state('mainpage', {
            url: "/mainpage",
            templateUrl: partial['mainpage'],
            resolve: resolve,
        });
})
.run(function($http, $cookies, $rootScope) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
});


app.controller('AppCtrl', function($scope, $rootScope, $state, $modal){


});


app.controller('MainpageCtrl', function($scope, $rootScope, $state, $modal){



});













