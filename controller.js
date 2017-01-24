var app = angular.module('myApp',[]);

// MY CONTROLLER
app.controller('myCtrl', ['$scope', function($scope) {

// $scope.name = 'Kevin';
var emailAddress = prompt("Shoot Resume off to recipient", "Email Address");

if(emailAddress !== null && emailAddress !== "Email Address"){
$scope.email = emailAddress;
console.log(emailAddress);
}

function emailShoot() {
    var link = "mailto:"+ emailAddress +"?subject=Kevin Huelsmann Resume&body=Hello! I've attached my resume for your consideration. Kevin Huelsmann.  (505) 999-8141"
    console.log(emailAddress);
    window.location.href = link;
}

emailShoot();
console.log("Hello");



}]);
