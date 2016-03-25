var app = angular.module("mainApp", []);

//service
app.service('fromService', function(){
  this.message = "This is from service message";
});

//factory
app.factory("fromFactory", function(){
  var factory = {}
  factory.message = "This is from factory";
  return factory;
});

//provider
app.provider("fromProvider", function(){
  var msg = "This is from provider";
  return {
    setName: function(name){
      msg += " "+ name
    },
    $get: function(){
      return {
        message: msg
      }
    }
  }
});

app.config(function(fromProviderProvider){
  fromProviderProvider.setName("Enigma")
});

app.controller("app", function($scope, fromService, fromFactory, fromProvider){
  $scope.greetingMessage = [fromService.message, fromFactory.message, fromProvider.message];
});
