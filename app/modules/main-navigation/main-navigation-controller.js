/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Module Name: Main navigation
 * Description: Provides main navigation method for the app
 * CONTROLLER
 */
(function() {
  "use strict";
  angular.module("armyApp.mainNavigation").controller("mainNavigation", function($scope, $location) {
    var _this = $scope;
    _this.pages = [
      {
        "name": "welcome",
        "display-name": "home",
        "routing-uri": "/"
      },
      {
        "name": "armylist",
        "display-name": "armylist",
        "routing-uri": "/armylist"
      },
      {
        "name": "quick reference",
        "display-name": "quick reference",
        "routing-uri": "/quick-reference"
      },
    ];
    _this.isActive = function (viewLocation) {
         var active = (viewLocation === $location.path());
         return active;
    };
  });
})();