'use strict';

(function () {

  var app = angular.module('fourth', []);

  var MainCtrl = function ($scope, $http) {
    $scope.username = "dev-ujjval";
    $scope.message = "Hello, Angular!";
    $scope.repos_orderby = "+stargazers_count";

    var onUserComplete = function (response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
            .then(onRepos, onError);
    }

    var onRepos = function(response) {
      $scope.repos = response.data;
    }

    var onError = function (reason) {
      $scope.error = "Could not fetch the user";
    }

    $scope.search = function() {
      $http.get("https://api.github.com/users/" + $scope.username)
      .then(onUserComplete, onError);  
    }

  }

  app.controller("MainCtrl", ["$scope", "$http", MainCtrl]);

}());

