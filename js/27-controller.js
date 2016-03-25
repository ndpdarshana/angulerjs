var app = angular.module("mainApp", []);

app.directive("myDirective", function(){
  function linkFunction($scope, elem, attrs){
    $scope.name = "Hello, Wrold";
    $scope.changeName = function(newName){
      $scope.name=newName;
    }
  }
  return{
    restrict: 'EA',
    scope: true,
    template: "<span ng-click='changeName(\"newname\")'>Current Name: {{name}}</span>",
    link: linkFunction
   };
});

app.controller("app",function(){

});
