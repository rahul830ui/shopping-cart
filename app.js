const app = angular.module("myApp", ['ngRoute']);

app.controller("MainController", ['$scope','$rootScope','$location', function ($scope, $rootScope, $location) {
   $scope.mvalue = 'Shopping Cart';
   $scope.goCart = function () {
       if ($rootScope.cart.length > 0) {
           $location.path("/address");
       } else {
           alert("Please add somting to Cart");
       }
   };
   $scope.goHome = function () {
       $location.path("/");
   }
}]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
           templateUrl: 'views/main.html',
            controller: 'FirstController'
        })
        .when('/address', {
            templateUrl: 'views/address.html',
            controller: 'AddressController'
        })
        .when('/finalpage', {
            templateUrl: 'views/summery.html',
            controller: 'SummeryController'
        })
        .otherwise('/')
});