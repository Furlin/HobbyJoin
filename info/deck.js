angular.module('card', ['ngTouch'])
.controller('HomeCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.goHome = function () {
        $window.location.href = 'index.html';  
    };
}])
.controller('DeckCtrl', ['$scope', '$http', '$sce', '$window', function($scope, $http, $sce, $window) {
    $scope.deck = {'deck':'Carregando informações...'};
    $http.get('http://localhost/deck.php'+$window.location.search)
    .success(function (data, status, headers, config) {
        $scope.deck = data;
        $scope.goTo = function (link) {
            $window.location.href = link;  
        };
    })
    .error(function (data, status, headers, config) {
        console.log('error');
    });
}]);