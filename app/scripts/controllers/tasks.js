'use strict';

angular.module('xsellPmgtApp')
  .controller('AddTasksCtrl', function ($scope, $firebase, $location, simpleLogin) {
    var tasksRef = new Firebase('https://xsell-pmgt.firebaseio.com/tasks');
    
    $scope.auth = simpleLogin.init();
    $scope.user = $scope.auth.user;
    
    var atask = {
      name:$scope.taskText,
      description:$scope.taskDescription,
      done:false
      
      
    };
    
    
    $scope.tasks = $firebase(tasksRef);

    $scope.locations = [
      {id:1, name:'Location1' },
      {id:2, name:'Location2' }
    ];
    
    $scope.addTask = function(){
      $scope.tasks.$add({
        name:$scope.taskName,
        description:$scope.taskDescription,
        location:$scope.taskLocation.id,
        done:false
      });
      $scope.taskText ='';
      $scope.taskDescription ='';
      $scope.taskLocation = '';
      $location.path('/tasks');
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
  .controller('TasksCtrl', function ($scope, $firebase, simpleLogin ) {
    var tasksRef = new Firebase('https://xsell-pmgt.firebaseio.com/tasks');
 
    $scope.auth = simpleLogin.init();
    var userget = $scope.auth.$getCurrentUser();
    
    userget.then(function(data){
    console.log("userget", data); 
    })
    
    console.log('auth',$scope.auth);



    
    $scope.tasks = $firebase(tasksRef);
     
     
    // funtion to delete tasks fomr the list
    $scope.deleteTask = function(id, taskname){
       
        var r=confirm('Do you want to delete the task: '+ taskname );
        if (r === true)
        {
          $scope.tasks.$remove(id);
        }
        else
        {
          x='You pressed Cancel!';
        }
       
    //   alert("Do you want to delete ".$scope.tasks.id);
      //console.log(id,"Trying to delete here");
      
      };


  });
  
  
angular.module('xsellPmgtApp')
  .controller('DisplayCtrl', function ($scope) {
    $scope.displays = [
      {id:1, name:'Display1' },
      {id:2, name:'Display2' },
      {id:3, name:'Display3' }
    ];
  });
  
