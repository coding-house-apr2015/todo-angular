'use strict';

angular.module('todo')
.controller('NavCtrl', function($rootScope, $scope, $state, $http, $window, User){

  $scope.afAuth.$onAuth(function(data){
    if(data){
      // login
      $rootScope.activeUser = data;
      $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;
      User.findOrCreate()
      .then(function(){
        $state.go('home');
      })
      .catch(function(){
        $window.swal({title: 'User Creation Error', text: 'There was a problem creating a user. Please try again.', type: 'error'});
      });
    }else{
      // logout
      $rootScope.activeUser = null;
      $http.defaults.headers.common.Authorization = null;
      $state.go('home');
    }

  });

  $scope.logout = function(){
    User.logout();
  };
});
