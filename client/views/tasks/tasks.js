'use strict';

angular.module('todo')
.controller('TasksCtrl', function($scope, $window, Task){
  Task.all()
  .then(function(response){
    $scope.tasks = response.data.tasks;
  });

  $scope.destroy = function(task){
    Task.destroy(task)
    .then(function(response){
      var task = response.data;
      $window._.remove($scope.tasks, function(t){
        return t._id === task._id;
      });
    });
  };

  $scope.create = function(task){
    Task.create(task)
    .then(function(response){
      $scope.tasks.push(response.data);
    });
  };
});
