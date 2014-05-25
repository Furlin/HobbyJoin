angular.module('card', ['ngTouch'])
.controller('HomeCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.goHome = function () {
        $window.location.href = 'menu.html';  
    };
}])
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])
.controller('ResultCtrl', ['$scope', '$http', '$sce', '$window', function($scope, $http, $sce, $window) {
    $scope.loading = true;
    $scope.refr = function () {
        $window.location.href = 'search.html'+$window.location.search;
    }
    $scope.goBack = function () {
        $window.location.href = 'adv_search.html';
    }
    $http.get('http://furlin.org/hobby/adv.php'+$window.location.search)
    .success(function (data, status, headers, config) {
        $scope.loading = false;
        if(data.length == 0)
            $scope.noresult = true;
        else
            $scope.cards = data;
        $scope.goTo = function (link) {
            $window.location.href = link;  
        };
        $scope.goNext = function () {
            var urlText = $window.location.search;
            var startPos = urlText.indexOf('&start=');
            if(startPos == -1) {
                $window.location.href = urlText+'&start=10';
            } else {
                $window.location.href = urlText.substr(0, startPos+7)+(parseInt(urlText.substr(startPos+7))+10);
            }
        };
    })
    .error(function (data, status, headers, config) {
        $scope.loading = false;
        $scope.err = true;
    });
}]);