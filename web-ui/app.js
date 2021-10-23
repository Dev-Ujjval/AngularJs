'use strict';
(function () {

    var myAPP = angular.module('myAPP', ['ngRoute']);

    myAPP.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'pages/home.html',
                    controller: 'HomeController'
                })
                .when('/about', {
                    templateUrl: 'pages/about.html',
                    controller: 'AboutController'
                })
                .when('/contact', {
                    templateUrl: 'pages/contact.html',
                    controller: 'ContactController'
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }]);

}())