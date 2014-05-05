angular.module('deck_search', ['ngTouch'])
.controller('HomeCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.goHome = function () {
        $window.location.href = 'index.html';  
    };
}])
.controller('DeckSearchCtrl', ['$scope', '$http', '$sce', '$window', function($scope, $http, $sce, $window) {
    $http.get('http://furlin.org/hobby/deck_result.php'+$window.location.search)
    .success(function (data, status, headers, config) {
        $scope.decks = data;
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
        console.log('error');
    });
}]);