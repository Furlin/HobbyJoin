angular.module('card', ['ngTouch'])
.controller('HomeCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.goHome = function () {
        $window.location.href = 'index.html';  
    };
}])
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])
.controller('CardCtrl', ['$scope', '$http', '$sce', '$window', function($scope, $http, $sce, $window) {
    $scope.card = [{'name_us':'Carregando informações da carta...'}];
    $http.get('http://furlin.orga/hobby/card_json.php'+$window.location.search)
    .success(function (data, status, headers, config) {
        $scope.card = data;
        console.log(data);
        $scope.lang = 'br';
        $scope.big = false;
        $scope.bebig = function () {
            $scope.big = !$scope.big;
        }
        $scope.show = data[0].sets[0].id;
        $scope.text_us = $sce.trustAsHtml(data[0].text_us);
        $scope.text_br = $sce.trustAsHtml(data[0].text_br);
        $scope.$watch('selection', function() {
            $scope.show = $scope.selection.id;
        });
        $scope.goTo = function (link) {
            $window.location.href = link;
        };
    })
    .error(function (data, status, headers, config) {
        console.log(data);
    });
}]);