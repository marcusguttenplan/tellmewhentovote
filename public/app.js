angular.module("myApp", ['ngRoute','datamaps'])
  .config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "list.html",
        controller: "listController",
        resolve: {
          dates: function(Dates) {
              return Dates.getDates();
          }
        }
      })
  })
  .service("Dates", function($http) {
    this.getDates = function() {
      return $http.get("/dates").
        then(function(response) {
            return response;
        }, function(response) {
            alert("Error retrieving dates.");
        });
    }
  })
  .controller("listController", function(dates, $scope) {
    $scope.dates = dates.data;
    // store time and update it every second, set variable to change if there is an alarm going off.
    $scope.currentTime = { time : new Date() };
  });