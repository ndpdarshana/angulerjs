var app = angular.module('mainApp',[]);

app.directive('myDirective', function(){
  return{
    restrict: 'EA',
    scope: {
      myname: '@', //@ - text bind, = - two way bind, & - one way bind
      age: '=',
      func: '&'
    },
    template: ['<p>Value of name in directive: {{myname}}</p>',
                '<p>Enter new name:<input type="text" ng-model="myname"></p>',
              '<p>Value of Age in directive: {{age}}</p>',
                '<p>Enter new age:<input type="text" ng-model="age"></p>',
                '<p>Alert from Directive:<button ng-click="func()">Click</button></p>'].join('')
  };
});

app.controller('app', function($scope){
  $scope.myname="Hello";
  $scope.age="26";
  $scope.alertTheName = function(){
    alert($scope.myname);
  };
});
