var app = angular.module("mainApp",[]);

app.controller('people', function($scope, $http){
  $http.get('http://localhost/angularjs/14-data.json')
  .success(function(response){
    $scope.persons = response.records;
  });

});
