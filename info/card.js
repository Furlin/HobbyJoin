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
.controller('CardCtrl', ['$scope', '$http', '$sce', '$window', function($scope, $http, $sce, $window) {
    $scope.card_id = $window.location.search;
    if ($scope.card_id.substr(4) > 100000) $scope.card_id = '?id='+($scope.card_id.substr(4) - 100000);
    console.log($scope.card_id);
    $scope.card = [{'name_us':'Carregando informações da carta...'}];
    $scope.show_add = false;
    $http.get('http://furlin.org/hobby/card_json.php'+$scope.card_id)
    .success(function (data, status, headers, config) {
        $scope.show_add = true;
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
        
        $scope.confirm = function (set, n) {
            $window.location.href = 'collection.html'+$scope.card_id+'&set='+set+'&num='+n;
        }
        
        $scope.alert = function () {
            $scope.show_alert = !$scope.show_alert;
        }

        $scope.collection = function () {
            $scope.add_now = true;
            $scope.show_add = false;
        }
        $scope.cancel = function () {
            $scope.add_now = false;
            $scope.show_add = true;
        }
        $scope.goTo = function (link) {
            $window.location.href = link;
        };
    })
    .error(function (data, status, headers, config) {
        console.log(data);
    });
}]);