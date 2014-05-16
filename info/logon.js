angular.module('login', ['ngTouch'])
.controller('LogonCtrl', ['$scope', '$http', '$sce', '$window', function($scope, $http, $sce, $window) {
    $scope.loading = true;
    $scope.goto = function (link) {
        $window.location.href = link+'.html';
    }
    $scope.refr = function () {
        $window.location.href = 'logon.html'+$window.location.search;
    }
    $http.get('http://furlin.org/hobby/login.php'+$window.location.search)
    .success(function (data, status, headers, config) {
        $scope.loading = false;
        if(data.login == true) {
            $window.localStorage.setItem('user', data.id);
            $window.localStorage.setItem('token', data.token);
            $window.location.href = 'menu.html';
        } else if (data.rec == true) {
            $scope.rec = true;
        } else if (data.cad == true) {
            $scope.cad = true;
        } else if (data.wrong == true) {
            $scope.wrong = true;
        } else if (data.mysql == true) {
            $scope.mysql = true;
        }
    })
    .error(function (data, status, headers, config) {
        $scope.loading = false;
        $scope.err = true;
    });
}]);