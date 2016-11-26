/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * CONTROLLER
 */
(function() {
  "use strict";
  angular.module("armyApp.landingPage").controller("welcome", function($scope, $http) {
    var _this = $scope;
    _this.welcome = "Welcome to my App";
  });
})();