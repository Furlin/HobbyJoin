angular.module('adv_search', ['ngTouch'])
.controller('HomeCtrl', ['$scope', '$window', function($scope, $window) {
    
    $scope.goHome = function () {
        $window.location.href = 'index.html';  
    };
    
}])
.controller('ManaCtrl', ['$scope', '$window', function($scope, $window) {
     
    $scope.manas = [
         {link:'w', checked:false},
         {link:'u', checked:false},
         {link:'b', checked:false},    
         {link:'r', checked:false},
         {link:'g', checked:false},
         {link:'x', checked:false}
     ];
    
    $scope.check = function(mana) {
        mana.checked = !mana.checked;
    };
    
}])
.controller('AccordionCtrl', ['$scope', function($scope) {
    
    $scope.check = function(checkbox) {
        checkbox.checked = !checkbox.checked;
    };
    
    $scope.colors = [
        {text:'Multi-coloridas', name:'multi', checked:true, size:3},
        {text:'Mono-coloridas', name:'multi', checked:true, size:3},
        {text:'Excluir cartas com cores não marcadas', name:'multi', checked:false, size:4},
        {text:'Requer todas as cores na mesma carta', name:'multi', checked:false, size:4}
     ];
    
    $scope.types = [
        {text:'Artefato', name:'art', checked:false, size:3},
        {text:'Criatura', name:'cre', checked:false, size:3},
        {text:'Encantamento', name:'enc', checked:false, size:3},
        {text:'Feitiço', name:'sor', checked:false, size:3},
        {text:'Lendário', name:'leg', checked:false, size:3},
        {text:'Mágica Instantânea', name:'mag', checked:false, size:3},
        {text:'Planinalta', name:'pla', checked:false, size:3},
        {text:'Terreno', name:'lnd', checked:false, size:3}
    ];
    
    $scope.rarities = [
        {text:'Comum', name:'com', checked:false, size:3},
        {text:'Incomum', name:'unc', checked:false, size:3},
        {text:'Rara', name:'rar', checked:false, size:3},
        {text:'Mítica', name:'mit', checked:false, size:3},
        {text:'Especial', name:'spe', checked:false, size:3},
        {text:'Terreno Básico', name:'bas', checked:false, size:3}
    ];
    
    $scope.colorOpen = function() {
        $scope.color = !$scope.color;
    };
    
    $scope.typeOpen = function() {
        $scope.type = !$scope.type;
    };
    
    $scope.rarityOpen = function() {
        $scope.rarity = !$scope.rarity;
    };
    

    $scope.rarity = false;
    $scope.color = false;
    $scope.type = false;

}]);