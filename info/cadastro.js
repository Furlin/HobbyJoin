angular.module('login', ['ngTouch'])
.controller('LoginCtrl', ['$scope', '$http', '$sce', '$window', function($scope, $http, $sce, $window) {
    if($window.localStorage.getItem('user') != null && $window.localStorage.getItem('user') != '' && $window.localStorage.getItem('user') != 'undefined')
        $window.location.href = 'menu.html';
    else
    {
        $scope.goto = function (link) {
            $window.location.href = link+'.html';
        }
        $scope.go = function (e)
        {
            var error = false;

            if($scope.myForm.nome.$viewValue == undefined)
                error = true;

             if($scope.myForm.cep1.$viewValue == undefined)
                error = true;

            if($scope.myForm.cep2.$viewValue == undefined)
                error = true;

            if($scope.myForm.email.$viewValue == undefined)
                error = true;

             if($scope.myForm.senha1.$viewValue == undefined)
                error = true;

            if($scope.myForm.senha1.$viewValue != $scope.myForm.senha2.$viewValue)
                error = true;

            if(!$scope.myForm.$valid || error) e.preventDefault();
        }
    }
}]);