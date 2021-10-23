'use strict';

(function () {

  var app = angular.module('fourth', []);

  var MainCtrl = function ($scope, $http) {
    $scope.username = "dev-ujjval";
    $scope.message = "Hello, Angular!";

    var onUserComplete = function (response) {
      $scope.user = response.data;
    }

    var onError = function (reason) {
      $scope.error = "Could not fetch the user";
    }

    $scope.search = function() {
      $http.get("https://api.github.com/users/" + $scope.username)
      .then(onUserComplete, onError);  
    }

    $scope.search();
  }

  app.controller("MainCtrl", ["$scope", "$http", MainCtrl]);

}());

