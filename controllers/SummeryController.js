app.controller("SummeryController", function ($scope, $rootScope,  SummeryService) {
    console.log(SummeryService.getAddress());
    $scope.clientDetails = SummeryService.getAddress();
    $scope.date = new Date();
    $scope.totalValue = [];
    $scope.finalCart = $rootScope.cart;
    $scope.finalCart.forEach(function (ele) {
        var tPrice = ele.quantity * ele.price;
        $scope.totalValue.push(tPrice);
        $scope.sum = $scope.totalValue.reduce((a, b) => a + b, 0);

    })


});