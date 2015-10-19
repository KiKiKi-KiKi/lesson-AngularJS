angular.module('app', [])
.controller('MainCtrl', function($scope) {
  $scope.users = [
    {name: 'taguchi', score: 52.22},
    {name: 'tanaka', score: 38.55},
    {name: 'yamada', score: 68.11}
  ];
  $scope.today = new Date();
});
