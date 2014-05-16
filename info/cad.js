angular.module('login', ['ngTouch'])
.controller('LoginCtrl', ['$scope', '$window', function($scope, $window) {
    /* if($window.localStorage.getItem('user') !== null)
        $window.location.href = 'menu.html';
    else */
        $scope.login = false;
}]);