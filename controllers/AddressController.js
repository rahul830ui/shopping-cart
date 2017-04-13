app.controller('AddressController', ['$scope','$location','SummeryService',  function ($scope, $location, SummeryService) {
    $scope.address = {};
    $scope.submitAddress = function () {
        console.log($scope.address);
        SummeryService.clientAddress($scope.address);
        $location.path('/finalpage');
    }

}]);