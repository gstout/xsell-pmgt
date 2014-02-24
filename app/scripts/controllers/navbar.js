'use strict';

angular.module('xsellPmgtApp')
  .controller('NavbarCtrl', function($scope, simpleLogin ) {
    
   // console.log("test",simpleLogin.init());
   
  $scope.auth = simpleLogin.init();
//  $scope.user = $scope.auth.user;
   
   //$scope.logout = simpleLogin.logout;
  });
