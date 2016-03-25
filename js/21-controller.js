var app = angular.module("mainApp", []);

app.provider('dateProvider', function(){
  var greet;
  return {
    setGreeting: function(value){
      greet = value;
    },
    $get: function(){
      return {
        showDate: function(){
          return greet + " " + new Date();
        },
        devShowDate: function(){
          return new Date();
        }
      }
    }
  }
});

app.config(function(dateProvider){ //dateProvider will automaticaaly suffixed with Provider
  console.log(dateProviderProvider.$get().showDate());
  dateProviderProvider.setGreeting("Hello, Provider")
});

app.controller("app", function($scope, dateProvider){
  $scope.greetingMessage = dateProvider.showDate();
  $scope.devShowDateOo = dateProvider.devShowDate();
});
