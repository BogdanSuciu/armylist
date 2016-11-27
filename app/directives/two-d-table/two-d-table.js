/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * DIRECTIVE
 */
(function() {
  "use strict";
  angular.module("armyApp").directive('twoDTable', function() {
  return {
    restrict: 'E',
    scope: {
      label: '=tableLabel',
      data: '=tableData',
    },
    templateUrl: 'app/directives/two-d-table/two-d-table.html',
    controller: function($scope) {
      var _this = $scope;
      _this.selectedColumn = "";
      _this.selectedRow = "";
      _this.selectColumn = function(column) {
        // TODO column selection doesn't work
        _this.selectedCoumn = column.$index;
      };
      _this.selectRow = function(row) {
        _this.selectedRow = row.$index;
      };
    }
  };
});
})();