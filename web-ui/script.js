'use strict';

var angular = angular.module('second', []);

angular.controller('MainCtrl', function($scope) {
 
  var person = {
    firstName: "Ujjval",
    lastName: "Parekh",
    imageSrc: "https://gdevtechnologies.com/assets/img/team/team-ujjval.jpg"
  }

  $scope.name = 'Hello, AngularJs!';
  $scope.person = person;
});
