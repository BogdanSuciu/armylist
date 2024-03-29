/*
 * ANGULAR SINGLE PAGE Warhammer APP
 * Version: 1.0
 * Creator: Bogdan Suciu
 * Description: The app retrieves Warhammer data from server
 * CONTROLLER
 */
(function() {
  "use strict";
  angular.module("armyApp").controller("quickReference", function($scope, scopeService) {
    if(!scopeService.shared.quickReference) {
      scopeService.shared.quickReference = {};
    }
    $scope.quickReference = scopeService.shared.quickReference;
    var _this = $scope.quickReference;
    
    _this.ballisticTable = {1:"6",2:"5",3:"4",4:"3",5:"2",6:"2/6",7:"2/5",8:"2/4",9:"2/3",10:"2/2"};
    
    _this.weaponSkillTable = {
      1:["4+","4+","5+","5+","5+","5+","5+","5+","5+","5+"],
      2:["3+","4+","4+","5+","5+","5+","5+","5+","5+","5+"],
      3:["3+","3+","4+","4+","4+","5+","5+","5+","5+","5+"],
      4:["3+","3+","3+","4+","4+","4+","4+","4+","5+","5+"],
      5:["3+","3+","3+","3+","4+","4+","4+","4+","4+","4+"],
      6:["3+","3+","3+","3+","3+","4+","4+","4+","4+","4+"],
      7:["3+","3+","3+","3+","3+","3+","4+","4+","4+","4+"],
      8:["3+","3+","3+","3+","3+","3+","3+","4+","4+","4+"],
      9:["3+","3+","3+","3+","3+","3+","3+","3+","4+","4+"],
      10:["3+","3+","3+","3+","3+","3+","3+","3+","3+","4+"]
    };
    
    _this.ToWoundTable = {
      1:["4+","5+","6+","6+","-","-","-","-","-","-"],
      2:["3+","4+","5+","6+","6+","-","-","-","-","-"],
      3:["2+","3+","4+","5+","6+","6+","-","-","-","-"],
      4:["2+","2+","3+","4+","5+","6+","6+","-","-","-"],
      5:["2+","2+","2+","3+","4+","5+","6+","6+","-","-"],
      6:["2+","2+","2+","2+","3+","4+","5+","6+","6+","-"],
      7:["2+","2+","2+","2+","2+","3+","4+","5+","6+","6+"],
      8:["2+","2+","2+","2+","2+","2+","3+","4+","5+","6+"],
      9:["2+","2+","2+","2+","2+","2+","2+","3+","4+","5+"],
      10:["2+","2+","2+","2+","2+","2+","2+","2+","3+","4+"]
    };
    
    if(!_this.visibleTable) {
      _this.visibleTable = "ballistic";
    }
    
  });
})();