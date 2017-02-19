var model = {
    name: 'Alex',
    age: 25,
    surname: 'Movchan',
    ava: 'img/alex.png',
    gallery : [
        {name: 'a', ava: 'img/1.png'},
        {name: 'b', ava: 'img/2.png'},
        {name: 'c', ava: 'img/3.png'},
        {name: 'd', ava: 'img/4.png'},
        {name: 'e', ava: 'img/5.png'},
        {name: 'f', ava: 'img/6.png'},
        {name: 'g', ava: 'img/7.png'},
        {name: 'h', ava: 'img/8.png'},
        {name: 'i', ava: 'img/9.png'}
    ]
}


var app = angular.module("app", []);

app.controller("appCtrl", function ($scope) {
    $scope.person = model;

    $scope.tableView = "table.html";
    $scope.listView = "list.html";

    $scope.url = $scope.tableView;

    $scope.showList = function () {
        $scope.url = $scope.listView;
    }

    $scope.showTable = function () {
        $scope.url = $scope.tableView;
    }
});