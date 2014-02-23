'use strict';

angular.module('xsellPmgtApp')
  .controller('NavbarCtrl', function($scope, simpleLogin) {
    $scope.logout = simpleLogin.logout;
  });
