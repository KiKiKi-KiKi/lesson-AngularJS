angular.module('app', [])
.controller('MainCtrl', function($scope) {
  $scope.users = [
    {name: 'taguchi', score: 52.22},
    {name: 'tanaka', score: 38.55},
    {name: 'yamada', score: 68.11},
    {name: 'honma', score: 100.00},
    {name: 'ichikawa', score: 99.98},
    {name: 'kuritani', score: 50.00},
    {name: 'hashimoto', score: 42.67},
    {name: 'shimobayashi', score: 27.88},
    {name: 'iwata', score: 50.00},
    {name: 'kobayashi', score: 68.12}
  ];
  $scope.today = new Date();
})
.controller('UserItemCtrl', function($scope) {
  // ネストされたコントローラーは親コントローラーの値がそのまま継承され使うことができる
  $scope.increment = function() {
    console.log($scope);
    $scope.user.score += 1;
    return $scope;
  };
});
