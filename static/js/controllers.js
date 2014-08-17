var myAppModule = angular.module("myApp", []);

myAppModule.controller("TextController", function($scope) {
    var someText = {};
    someText.message = "旅の始まりです";
    $scope.someText = someText;
});

myAppModule.controller("StartUpController", function($scope) {
    $scope.computeNeeded = function() {
        $scope.needed = $scope.startingEstimate * 10;
    };

    $scope.requestFunding = function() {
        window.alert("もっと顧客を増やしてからにしてください")
    }
});

myAppModule.controller("StudentListController", function($scope) {
    var students = [{name: "メアリー・コントラリー", id:"1"},
                    {name: "ジャック・スプラット", id: 2},
                    {name: "ジル・ヒル", id:3}];
    $scope.students = students;

    $scope.insertTom = function() {
        $scope.students.splice(1, 0, {name: "トム・サム", id:4});
    }
});

myAppModule.controller("AlbumController", function($scope) {
    var album = [
        {name: "サウスウェスト・セレナーデ", duration: "2.34"},
        {name: "ノーザン・ライト・ワルツ", duration: "3:21"},
        {name: "イースタン・タンゴ", duration: "17.45"}
    ];

    $scope.album = album;
});

myAppModule.controller("DeathrayMenuController", function($scope) {
    $scope.menuState = {show: false};
    $scope.isDisabled = false;

    $scope.toggleMenu = function() {
        $scope.menuState.show = !$scope.menuState.show;
    };

    $scope.stun = function() {
        $scope.isDisabled = true;
    }
});

myAppModule.controller("HeaderController", function($scope) {
    $scope.isError = false;
    $scope.isWarning = false;

    $scope.showError = function() {
        $scope.messageText = "エラー発生！";
        $scope.isError = true;
        $scope.isWarning = false;
    }

    $scope.showWarning = function() {
        $scope.messageText = "単なる警告です。操作を続けてください";
        $scope.isWarning = true;
        $scope.isError = false;
    }
});

myAppModule.controller("RestaurantTableController", function($scope) {
    $scope.directory = [
        {name: "ハンサム・へファー", cuisine: "BBQ"},
        {name: "グリーンズ・グリーン・グリーンズ", cuisine: "サラダ"},
        {name: "ハウス・オブ・ファイン・フィッシュ", cuisine: "シーフード"}
    ];

    $scope.selectRestaurant = function(row) {
        $scope.selectedRow = row;
    };
});

myAppModule.controller("CartController", function($scope) {
    $scope.bill = {};

    $scope.items = [
        {title: "ペイントポット", quantity: 8, price: 3.95},
        {title: "ポルカドット", quantity: 17, price: 12.95},
        {title: "ペブル", quantity: 5, price: 6.95},
    ];

    $scope.totalCart = function() {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total = total + $scope.items[i].price * $scope.items[i].quantity;
        }

        return total;
    };


    $scope.subtotal = function() {
        return $scope.totalCart() - $scope.bill.discount;
    };

    function calculateDiscount(newValue, oldValue, $scope) {
        $scope.bill.discount = newValue > 100 ? 10 : 0;
    }

    $scope.$watch($scope.totalCart, calculateDiscount);
})
