var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: '10-page.html'
  })
  .when('/helloUser',{
    templateUrl: '10-hello.html'
  })
  .otherwise({
    redirectTo: '/'
  }); 
});
