var myAppModule = angular.module("myApp", []);

myAppModule.controller("TextController", function($scope) {
    var someText = {};
    someText.message = "旅の始まりです";
    $scope.someText = someText;
})

myAppModule.controller("StartUpController", function($scope) {
    $scope.computeNeeded = function() {
        $scope.needed = $scope.startingEstimate * 10;
    };

    $scope.requestFunding = function() {
        window.alert("もっと顧客を増やしてからにしてください")
    }
})
