/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * REQUEST SERVICES
 */
(function() {
  "use strict";
  // defining api communication services
  angular.module("armyApp").factory("requestServices", function($http) {
    return {
      codexList: function() {
        return $http.get("php/codex.php").then(function(response) {
          return response.data.records;
        })
      },
      forceList: function() {
        return $http.get("php/forces.php").then(function(response) {
          return response.data.records;
        });
      },
      detachmentDetails: function(data) {
        return $http.get("php/detachment.php?id=" + data.id).then(function(response) {
          return response.data.records;
        });
      },
      units: function(codex, slot) {
        return $http.get("php/units.php?codex=" + codex + "&slot=" + slot).then(function(response) {
          return response.data.records;
        });
      },
      models: function(id) {
        return $http.get("php/models.php?model-id=" + id).then(function(response) {
          return response.data.records;
        });
      }
    };
  });
})();