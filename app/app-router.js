/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 */
(function() {
  "use strict";
  
  // app router
  angular.module("armyApp").config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "app/modules/welcome/html/welcome.html"
  })
  .when("/armylist", {
    templateUrl : "app/modules/army-list/html/army-list.html"
  })  .when("/quick-reference", {
    templateUrl : "app/modules/quick-reference/html/quick-reference.html"
  }).otherwise({
    templateUrl : "app/modules/error-page/html/error-page.html"
  });
});
})();