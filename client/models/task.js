'use strict';

angular.module('todo')
.factory('Task', function($http, nodeUrl){

  function Task(){
  }

  Task.all = function(){
    return $http.get(nodeUrl + '/tasks');
  };

  Task.destroy = function(task){
    return $http.delete(nodeUrl + '/tasks/' + task._id);
  };

  Task.create = function(task){
    return $http.post(nodeUrl + '/tasks', task);
  };

  return Task;
});
