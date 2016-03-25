var app = angular.module("mainApp", []);

app.controller("app", function($scope, randomService){
  $scope.generateRandom = function(){
    $scope.randomNum = randomService.generate();
  }
});

app.service("randomService", function(){
  var num = Math.floor(Math.random()*10);
  this.generate = function(){
    return num;
  }
});
