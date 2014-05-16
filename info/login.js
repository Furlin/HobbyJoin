angular.module('login', ['ngTouch'])
.controller('LoginCtrl', ['$scope', '$window', function($scope, $window) {
    /* if($window.localStorage.getItem('user') !== null)
        $window.location.href = 'menu.html';
    else */
    $scope.goto = function (link) {
        $window.location.href = link+'.html';
    }
    $scope.rec = false;
}]);