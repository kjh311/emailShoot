var app = angular.module('myApp',[]);

// MY CONTROLLER
app.controller('myCtrl', ['$scope', function($scope) {

$scope.name = 'Kevin';
// $scope.googlekey = <%= process.env.USER_KEY %>;


}]);
