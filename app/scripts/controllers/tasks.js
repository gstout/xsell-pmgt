'use strict';

angular.module('xsellPmgtApp')
  .controller('TasksCtrl', function ($scope, $firebase) {
    var tasksRef = new Firebase("https://xsell-pmgt.firebaseio.com/tasks");
    $scope.tasks = $firebase(tasksRef);
    
//    $scope.tasks = [
//      {id:1, name:'task1', done:false },
//      {id:2, name:'task2', done:false },
//      {id:3, name:'task3', done:false }
//    ];
    
    $scope.addTask = function(){
      $scope.tasks.$add({name:$scope.taskText ,done:false});
      $scope.taskText ='';
    };
    
    $scope.deleteTask = function(id){
      console.log(id,"Trying to delete here");
      $scope.tasks.$remove(id);
    };
    
    
  });
  
  
//  function MyController($scope, $firebase) {
//  var peopleRef = new Firebase("https://<my-firebase>.firebaseio.com/people");
//  $scope.people = $firebase(peopleRef);
//  $scope.addPerson = function() {
//    // AngularFire $add method
//    $scope.people.$add($scope.newPerson);
//    //or add a new person manually
//    peopleRef.update({name: 'Alex', age: 35});
// 
//    $scope.newPerson = "";
//  }
//}
//  
  
  
  
  angular.module('xsellPmgtApp')
  .controller('DisplayCtrl', function ($scope) {
    $scope.tasks = [
      {id:1, name:'Display1' },
      {id:2, name:'Display2' },
      {id:3, name:'Display3' }
    ];
  });
  
  angular.module('xsellPmgtApp')
  .controller('LocationCtrl', function ($scope) {
    $scope.tasks = [
      {id:1, name:'Location1' },
      {id:2, name:'Location2' }
    ];
  });
  