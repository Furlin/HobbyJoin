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
    if($window.localStorage.getItem('user') == null)
        $window.location.href = 'login.html';
    else
        $scope.user = $window.localStorage.getItem('user');
    
    var urlText = $window.location.search;
    var startPos = urlText.indexOf('?');
    if(startPos == -1) var sign = '?';
    else var sign = '&';
    
    $scope.deck = {'deck':'Carregando informações...'};
    $scope.deck.show = false;
    $scope.refr = function () {
        $window.location.href = 'collection.html'+$window.location.search;
    }
    //$scope.deck = {'deck':'http://furlin.org/hobby/collection.php'+$window.location.search+sign+'user='+$window.localStorage.getItem('user')};
    $http.get('http://furlin.org/hobby/collection.php'+$window.location.search+sign+'user='+$window.localStorage.getItem('user'))
    .success(function (data, status, headers, config) {
        $scope.deck = data;
        $scope.deck.show = true;
        console.log(data);
        $scope.goTo = function (link) {
            $window.location.href = link;  
        };
    })
    .error(function (data, status, headers, config) {
        $scope.err = true;
        $scope.deck = {'deck':''};
    });
}]);