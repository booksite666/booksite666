var app=angular.module("myApp",[]);
    app.controller("myController",function($scope,$http){

      $scope.title="myAngular app";
      $http.get("https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=2a6c01f9753c469cb31a08e46e1d1ff4").then(function(entries){
        $scope.stuffs=entries.data.results;
        console.log(entries.data);
      });


});
