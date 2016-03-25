var app = angular.module("mainApp", []);

app.factory("randomFactory", function(){
  var randomObj = {};
  var num = Math.floor(Math.random()*10);
  randomObj.gen = function(){
    return num;
  }
  return randomObj;
});

app.controller("app", function($scope, randomFactory){
  $scope.generateNum = function(){
    $scope.randomNum = randomFactory.gen();
  }
});
