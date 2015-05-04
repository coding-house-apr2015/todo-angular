'use strict';

angular.module('todo')
.factory('User', function($rootScope, $http, nodeUrl){

  function User(){
  }

  User.findOrCreate = function(){
    return $http.post(nodeUrl + '/users');
  };

  User.register = function(user){
    return $rootScope.afAuth.$createUser(user);
  };

  User.login = function(user){
    return $rootScope.afAuth.$authWithPassword(user);
  };

  User.logout = function(){
    return $rootScope.afAuth.$unauth();
  };

  return User;
});
