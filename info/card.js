angular.module('card', ['ngTouch'])
.controller('HomeCtrl', ['$scope', '$window', function($scope, $window) {
    
    $scope.goHome = function () {
        $window.location.href = 'index.html';  
    };
    
}])
.controller('CardCtrl', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $http.get('http://localhost/Apps/HobbyJoin/card.json')
    .success(function (data, status, headers, config) {
        $scope.card = data;
        $scope.lang = 'none';
        $scope.text_us = $sce.trustAsHtml(data[0].text_us);
        $scope.text_br = $sce.trustAsHtml(data[0].text_br);
        if($scope.text_br != null) {
            $scope.lang = 'br';
        } else if($scope.text_us != null) {
            $scope.lang = 'us';
        }
    })
    .error(function (data, status, headers, config) {
        console.log('fuck');
    });
}]);