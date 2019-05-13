// on déclenche le module angular que l'on appelle voiture (manip du DOM)
var voiture = angular.module('voiture', []);
//les services sont appeler avec $
voiture.controller('Cntrl', function($scope, $http){

  $http.get('voiture.json').then(function(res){
    $scope.voitures = res.data;
  });
});
