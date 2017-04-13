
    app.controller('FirstController', ['$scope','$rootScope','ProductDetails', function ($scope, $rootScope, ProductDetails) {
        $rootScope.cart = [];
        $rootScope.cartValue = 0;
        $scope.itemName = [];
        $scope.details = ProductDetails;
        $scope.size = "";
       $scope.changeSize = function (size) {
           $scope.size = size;
           // console.log($scope.size);
       };

       $scope.addToCart = function (record) {

           if($scope.size === "s" || $scope.size === "m" || $scope.size === "l" || $scope.size === "xl") {
               record.size.push($scope.size);
               record.quantity++;
               $rootScope.cartValue++;
               if($scope.itemName.indexOf(record.item) == -1) {
                   $scope.itemName.push(record.item);
                   $rootScope.cart.push(record);
               }
               $scope.size = "";
               // console.log($rootScope.cart);
           } else {
               alert("Please select the size");
           }
       }


    }]);
