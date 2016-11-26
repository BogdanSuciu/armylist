/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 */
(function() {
  "use strict";
  // defining angular application module
  angular.module("armyApp", [
  // internal modules
  "armyApp.landingPage",
  "armyApp.pageNotFound",
  "armyApp.mainNavigation",
  "armyApp.armyList",
  "armyApp.quickReference",
  // external modules
  "ngStorage",
  "ngRoute"
  ]);
})();