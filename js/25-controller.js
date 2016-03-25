var app = angular.module("mainApp", []);

app.filter("base", function(){
  console.log("base filter called");
  var filt = function(input, base){
    var parsed = parseInt(input,10);
    var based = parseInt(base, 10);
    if(isNaN(parsed) || isNaN(based) || based <=1 || based >=37 ) return input;
    return parsed.toString(based);
  }
  return filt;
});

app.controller("app", function(){

});
