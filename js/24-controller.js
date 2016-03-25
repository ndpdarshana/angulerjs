var app = angular.module("mainApp", []);

app.controller("app", function($scope){
  $scope.tasks = [];

  var taskData = localStorage['tasksList'];
  if(taskData !== undefined && taskData != ""){
    $scope.tasks = JSON.parse(taskData);
  }

  $scope.searchEnter = function(){
    if(event.keyCode == 13 && $scope.task != ""){
      $scope.addTask();
    }
  }

  $scope.addTask = function(){
    $scope.tasks.push({'taskMsg':$scope.task, 'status':false});
    $scope.task = "";
    localStorage['tasksList'] = JSON.stringify($scope.tasks);
    console.log(localStorage['tasksList']);
  }

  $scope.contentEdit = function(msg){
    event.target.contentEditable = event.target.contentEditable == "true" ? "false":"true";
    //console.log("edit" + msg);
  }

  $scope.enterAgain = function(msg){
    if(event.keyCode == 13 && $scope.task != ""){
      $scope.contentEdit(msg);
    }
  }
});
