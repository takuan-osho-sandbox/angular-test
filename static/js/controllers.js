var myAppModule = angular.module("myApp", []);

myAppModule.controller("TextController", function($scope) {
    var someText = {};
    someText.message = "旅の始まりです";
    $scope.someText = someText;
})

myAppModule.controller("StartUpController", function($scope) {
    $scope.funding = {startingEstimate: 0};

    $scope.computeNeeded = function() {
        $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };
})
