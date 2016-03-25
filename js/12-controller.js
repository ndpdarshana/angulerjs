var app = angular.module("mainApp",[]);

app.controller('people', function($scope, $http){
  $http.get('http://localhost/angularjs/12-data.json')
  .success(function(response){
    $scope.persons = response.records;
  });

});
