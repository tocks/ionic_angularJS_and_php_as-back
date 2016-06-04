app.controller("UniversityCtrl", function ($scope) {
  $scope.university ={
    nom:"Académie de Rennes",
    president: "Thierry Terret",
    site:"http://www.ac-rennes.fr/",
    email:"contact@ac-rennes.fr",
    tel: "02 10 14 45 41",
    fax: "02 01 14 56 96",
    addresse:"9 Rue Jean Macé, 35000 Rennes"
  }
});


app.controller("EtablishmentsCtrl", function ($scope, $http, $state, MainFactory) {
  MainFactory
    .getEtablishments()
    .then(function (data) {
      $scope.etablishments = data;
    })
    .catch(function (message) {
      console.log(message);
    })

  $scope.chargerFormations = function (idEtab) {
    $state.go("formations", {
      idEtablshment: idEtab
    });
  }

});


app.controller("FormationsCtrl", function ($scope, $http, MainFactory ) {
  MainFactory
    .getFormationsByEtablishment()
    .then(function (data) {
      $scope.formations = data;
    })
    .catch(function (message) {
      console.log(message);
    })

});

app.controller("GeoCtrl", function ($scope, $http) {

});

