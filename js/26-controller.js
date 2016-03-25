var app = angular.module('mainApp', []);

app.directive('myFirstDirective', function(){
  return {
    template: 'Hello world',
    restrict: 'E', //E- Element, A- Attribute
  };
});

app.controller('app', function(){

})
