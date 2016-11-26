/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * CONTROLLER
 */
(function() {
  "use strict";
  angular.module("armyApp.armyList").controller("armyList", function(dataServices, requestServices, storageServices, $localStorage, $sessionStorage, $scope, $http) {
    var _this = $scope;
    _this.selectedForce;
    _this.detachment;
    _this.selectedCodex;
    _this.forces;
    _this.detachment;
    _this.troops;
    _this.troopsList = {};
    _this.models={};
    // retrieving initial codex list
    requestServices.codexList().then(function(response) {
      _this.codices = response;
    });
    _this.getForceType = function(selectedCodex) {
      // must use selectedCodex to filter different detachments
      requestServices.forceList().then(function(response) {
        _this.forces = response;
      });
    };
    // retrieving detachment data
    _this.getDetachment = function(data) {
      requestServices.detachmentDetails(data).then(function(response) {
        _this.detachment = response;
        for(var iPos=1; iPos<=_this.detachment.max_troops; iPos++) {
          _this.troopsList[iPos] = {selectedOption: ""};
          if(iPos<=_this.detachment.min_troops) {
            _this.troopsList[iPos]["required"] = true;
          }
        }
      });
    };
    // requesting available troops for selected codex
    _this.getTroops = function(codex) {
      requestServices.units(codex.id, "2").then(function(response) {
        _this.troops = response;
      });
      
    };
    // returns stats for models of selected unit
    _this.getModels = function(unit) {
      var modelId = unit.model_01.id;
      if(!_this.models[modelId]) {
        requestServices.models(modelId).then(function(response) {
          _this.models[modelId] = response;
        });
      }
    };
    // resets selection of current army unit
    _this.resetSelection = function(el) {
      el.selectedOption='';
    };
  });
})();