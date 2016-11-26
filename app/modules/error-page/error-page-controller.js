/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * CONTROLLER
 */
(function() {
  "use strict";
  angular.module("armyApp.pageNotFound").controller("pageNotFound", function($scope, $http) {
    var _this = $scope;
    _this.message = "WE ARE SORRY THE PAGE YOU ARE LOOKING FOR DOESN'T EXIST";
  });
})();