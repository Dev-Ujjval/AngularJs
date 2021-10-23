'use strict';

(function () {

  var app = angular.module('five', []);

  var MainCtrl = function ($scope, github) {
    $scope.username = "dev-ujjval";
    $scope.message = "Hello, Angular!";
    $scope.repos_orderby = "+stargazers_count";

    var onUserComplete = function (data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    }

    var onRepos = function(data) {
      $scope.repos = data;
    }

    var onError = function (reason) {
      $scope.error = "Could not fetch the user";
    }

    $scope.search = function() {
      github.getuser($scope.username).then(onUserComplete, onError);  
    }

  }

  app.controller("MainCtrl", ["$scope", "github", MainCtrl]);

}());

