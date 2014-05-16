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
.controller('CollectionCtrl', ['$scope', '$http', '$sce', '$window', function($scope, $http, $sce, $window) {
    $scope.deck = {'deck':'Carregando informações...'};
    $http.get('http://furlin.org/hobby/collection.php'+$window.location.search)
    .success(function (data, status, headers, config) {
        $scope.deck = data;
        console.log(data);
        $scope.goTo = function (link) {
            $window.location.href = link;  
        };
    })
    .error(function (data, status, headers, config) {
        console.log('error');
    });
}]);