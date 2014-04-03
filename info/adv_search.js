angular.module('adv_search', [])
.controller('ManaCtrl', ['$scope', '$window', function($scope, $window) {
     $scope.manas = [
         {link:'w', checked:false},
         {link:'u', checked:false},
         {link:'b', checked:false},    
         {link:'r', checked:false},
         {link:'g', checked:false},
         {link:'x', checked:false}
     ];
    
    $scope.toggle = function(mana) {
        mana.checked = !mana.checked;
    };
    
}]);