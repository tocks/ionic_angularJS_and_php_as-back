app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state("etablishments", {
    url: "/etablishments",
    templateUrl:"/templates/etablishments.html",
    controller:"EtablishmentsCtrl"
  });

  $stateProvider.state("formations", {
    url: "/formations/:idEtablshment",
    templateUrl:"/templates/formations.html",
    controller:"FormationsCtrl"
  });

  $stateProvider.state("university", {
    url: "/university",
    templateUrl:"/templates/university.html",
    controller:"UniversityCtrl"
  });

  $stateProvider.state("geo", {
    url: "/geo",
    templateUrl:"/templates/geolocalisation.html",
    controller:"GeoCtrl"
  });

  $urlRouterProvider.otherwise("university");


});


