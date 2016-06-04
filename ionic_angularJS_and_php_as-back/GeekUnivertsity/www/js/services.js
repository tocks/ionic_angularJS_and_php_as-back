app.factory("MainFactory", function ($http, $q, $stateParams) {


//retrieve all etablishments
  function getEtablishments () {
    return $http.get("http://localhost/geekuniversity/etablishments.php")
      .then(function (data) {
        return data;
      }).catch(function(response) {
      $q.reject("sorry, we couldn't retrive data: ", response.status);
    });

  }

//retrieve formations by etablishment
  function getFormationsByEtablishment() {
    return $http.get("http://localhost/geekuniversity/formations.php?idEtablishment="+$stateParams.idEtablshment)
      .then(function (data) {
        return data;
      }).catch(function(response) {
        $q.reject("sorry, we couldn't retrive data: ", response.status);
      });

  }

  return{
    getEtablishments : getEtablishments,
    getFormationsByEtablishment : getFormationsByEtablishment
  };
});


