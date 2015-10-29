angular.module('app', [])
.controller('MainCtrl', function($scope){
  $scope.tasks = [
    {id: 1, body:'do this 1', done:false},
    {id: 2, body:'do this 2', done:false},
    {id: 3, body:'do this 3', done:true},
    {id: 4, body:'do this 4', done:false},
    {id: 5, body:'do this 5', done:false},
  ];

  $scope.addNew = function() {
    var l = $scope.tasks.length,
        data = $scope.newTaskBody.trim();
    if(data !== undefined && data !== '') {
      $scope.tasks[l] = {
        id: l+=1,
        body: data,
        done: false
      };
      $scope.newTaskBody = '';
    }
  };
});
