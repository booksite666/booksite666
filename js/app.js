var app=angular.module("myApp",[]);
    app.controller("myController",function($scope,$http){

      $scope.title="myAngular app";
      $http.get("data/data.json").then(function(entries){
        $scope.stuffs=entries.data.results;
        console.log(entries.data);
      });


});
