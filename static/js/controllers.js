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

myAppModule.controller("StudentListController", function($scope) {
    var students = [{name: "メアリー・コントラリー", id:"1"},
                    {name: "ジャック・スプラット", id: 2},
                    {name: "ジル・ヒル", id:3}];
    $scope.students = students;

    $scope.insertTom = function() {
        $scope.students.splice(1, 0, {name: "トム・サム", id:4});
    }
})

myAppModule.controller("AlbumController", function($scope) {
    var album = [
        {name: "サウスウェスト・セレナーデ", duration: "2.34"},
        {name: "ノーザン・ライト・ワルツ", duration: "3:21"},
        {name: "イースタン・タンゴ", duration: "17.45"}
    ];

    $scope.album = album;
})

myAppModule.controller("DeathrayMenuController", function($scope) {
    $scope.menuState = {show: false};
    $scope.isDisabled = false;

    $scope.toggleMenu = function() {
        $scope.menuState.show = !$scope.menuState.show;
    };

    $scope.stun = function() {
        $scope.isDisabled = true;
    }
})
