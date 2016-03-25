var app=angular.module("mainApp",[]);

app.controller("app", function($scope){
/*  $scope.click = function(){
    $scope.myRandomNumber = Math.random();

    console.log("clicked");
  }*/
  document.querySelector('input').addEventListener('click', function(){
    $scope.myRandomNumber = Math.random();
    //$scope.digest();
    console.log("clicked")
  }, false)

});
