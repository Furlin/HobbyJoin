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
    
}])
.controller('AccordionCtrl', ['$scope', '$http', function($scope, $http) {
    
    $scope.check = function(checkbox) {
        checkbox.checked = !checkbox.checked;
    };
    
    $scope.colors = [
        {text:'Multi-coloridas', name:'multi', checked:true, size:3},
        {text:'Mono-coloridas', name:'mono', checked:true, size:3},
        {text:'Excluir cartas com cores não marcadas', name:'exclude', checked:false, size:4},
        {text:'Requer todas as cores na mesma carta', name:'req-color', checked:false, size:4}
     ];
    
    $scope.types = [
        {text:'Todos os tipos na mesma carta', name:'all', checked:false, size:4},
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
    
    $scope.sets = [{"id":"1","set":"Nascidos dos Deuses"},{"id":"2","set":"Theros"},{"id":"3","set":"Labirinto do Drag\u00e3o"},{"id":"4","set":"Port\u00f5es Violados"},{"id":"5","set":"Retorno a Ravnica"},{"id":"6","set":"Retorno de Avacyn"},{"id":"7","set":"Ascens\u00e3o das Trevas"},{"id":"8","set":"Innistrad"},{"id":"9","set":"Nova Phyrexia"},{"id":"10","set":"Mirrodin Sitiada"},{"id":"11","set":"Cicatrizes de Mirrodin"},{"id":"12","set":"Ascens\u00e3o dos Eldrazi"},{"id":"13","set":"Despertar do Mundo"},{"id":"14","set":"Zendikar"},{"id":"15","set":"Alara Reborn"},{"id":"16","set":"Conflux"},{"id":"17","set":"Fragmentos de Alara"},{"id":"18","set":"Entardecer"},{"id":"19","set":"P\u00e2ntano Sombrio"},{"id":"20","set":"Alvorecer"},{"id":"21","set":"Lorwyn"},{"id":"22","set":"Vis\u00e3o do Futuro"},{"id":"23","set":"Caos Planar"},{"id":"24","set":"Time Spiral"},{"id":"25","set":"Time Spiral \"Timeshifted\""},{"id":"26","set":"Frente Fria"},{"id":"27","set":"Alian\u00e7as"},{"id":"28","set":"Era Glacial"},{"id":"29","set":"Insurrei\u00e7\u00e3o"},{"id":"30","set":"Pacto das Guildas"},{"id":"31","set":"Ravnica: A Cidade das Guildas"},{"id":"32","set":"Salvadores Kamigawa"},{"id":"33","set":"Traidores de Kamigawa"},{"id":"34","set":"Campe\u00f5es de Kamigawa"},{"id":"35","set":"A Quinta Aurora"},{"id":"36","set":"Darksteel"},{"id":"37","set":"Mirrodin"},{"id":"38","set":"Flagelo"},{"id":"39","set":"Legi\u00f5es"},{"id":"40","set":"Investida"},{"id":"41","set":"Julgamento"},{"id":"42","set":"Tormento"},{"id":"43","set":"Odiss\u00e9ia"},{"id":"44","set":"Apocalipse"},{"id":"45","set":"Conjun\u00e7\u00e3o"},{"id":"46","set":"Invas\u00e3o"},{"id":"47","set":"Profecia"},{"id":"48","set":"N\u00eamesis"},{"id":"49","set":"M\u00e1scara de Merc\u00e1dia"},{"id":"50","set":"O Destino de Urza"},{"id":"51","set":"O Legado de Urza"},{"id":"52","set":"A Saga de Urza"},{"id":"53","set":"\u00caxodo"},{"id":"54","set":"Fortaleza"},{"id":"55","set":"Tempestade"},{"id":"56","set":"Alisios"},{"id":"57","set":"Vis\u00f5es"},{"id":"58","set":"Miragem"},{"id":"59","set":"Terras Natais"},{"id":"60","set":"Fallen Empires"},{"id":"61","set":"The Dark"},{"id":"62","set":"Legends"},{"id":"63","set":"Antiquities"},{"id":"64","set":"Arabian Nights"},{"id":"65","set":"Cole\u00e7\u00e3o B\u00e1sica Magic 2014"},{"id":"66","set":"Magic 2013"},{"id":"67","set":"Magic 2012"},{"id":"68","set":"Magic 2011"},{"id":"69","set":"Magic 2010"},{"id":"70","set":"D\u00e9cima Edi\u00e7\u00e3o"},{"id":"71","set":"Nona Edi\u00e7\u00e3o"},{"id":"72","set":"Oitava Edi\u00e7\u00e3o"},{"id":"73","set":"S\u00e9tima Edi\u00e7\u00e3o"},{"id":"74","set":"Sexta Edi\u00e7\u00e3o Classica"},{"id":"75","set":"Quinta Edi\u00e7\u00e3o"},{"id":"76","set":"Quarta Edi\u00e7\u00e3o"},{"id":"77","set":"Revised Edition"},{"id":"78","set":"Unlimited Edition"},{"id":"79","set":"Limited Edition Beta"},{"id":"80","set":"Limited Edition Alpha"},{"id":"85","set":"Premium Deck Series: Graveborn"},{"id":"86","set":"Premium Deck Series: Fire and Lightning"},{"id":"87","set":"Premium Deck Series: Slivers"},{"id":"88","set":"Modern Masters"},{"id":"89","set":"Duels of the Planeswalkers"},{"id":"90","set":"Chronicles"},{"id":"91","set":"Commander 2013 Edition"},{"id":"92","set":"Commander's Arsenal"},{"id":"93","set":"Planechase 2012 Edition"},{"id":"94","set":"Commander"},{"id":"95","set":"Archenemy"},{"id":"96","set":"Planechase"},{"id":"98","set":"From the Vault: Realms"},{"id":"99","set":"From the Vault: Legends"},{"id":"100","set":"From the Vault: Relics"},{"id":"101","set":"From the Vault: Exiled"},{"id":"102","set":"From the Vault: Dragons"},{"id":"103","set":"Duel Decks: Heroes vs. Monsters"},{"id":"104","set":"Duel Decks: Sorin vs. Tibalt"},{"id":"105","set":"Duel Decks: Izzet vs. Golgari"},{"id":"106","set":"Duel Decks: Venser vs. Koth"},{"id":"107","set":"Duel Decks: Ajani vs. Nicol Bolas"},{"id":"108","set":"Duel Decks: Knights vs. Dragons"},{"id":"109","set":"Duel Decks: Elspeth vs. Tezzeret"},{"id":"110","set":"Duel Decks: Phyrexia vs. The Coalition"},{"id":"111","set":"Duel Decks: Garruk vs. Liliana"},{"id":"112","set":"Duel Decks: Divine vs. Demonic"},{"id":"113","set":"Duel Decks: Jace vs. Chandra"},{"id":"114","set":"Duel Decks: Elves vs. Goblins"},{"id":"118","set":"Deckmasters"},{"id":"119","set":"Beatdown Box Set"},{"id":"120","set":"Battle Royale Box Set"},{"id":"121","set":"Anthologies"},{"id":"123","set":"Unhinged"},{"id":"124","set":"Unglued"},{"id":"126","set":"Starter 2000"},{"id":"127","set":"Starter 1999"},{"id":"128","set":"Portal Three Kingdoms"},{"id":"129","set":"Portal Segunda Era"},{"id":"130","set":"Portal"},{"id":"131","set":"Introductory Two-Player Set"},{"id":"146","set":"Champs (Promo)"},{"id":"148","set":"Arena League (Promo)"},{"id":"155","set":"European Land Program (Promo)"},{"id":"156","set":"Guru (Promo)"},{"id":"157","set":"Asia Pacific Land Program (Promo)"}];

    $scope.rarity = false;
    $scope.color = false;
    $scope.type = false;

}]);