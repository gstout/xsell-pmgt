'use strict';

angular.module('xsellPmgtApp')
  .controller('AddTasksCtrl', function ($scope, $firebase, $location) {
    var tasksRef = new Firebase('https://xsell-pmgt.firebaseio.com/tasks');
    

    
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
  .controller('TasksCtrl', function ($scope, $firebase, $firebaseSimpleLogin,simpleLogin) {
    var tasksRef = new Firebase('https://xsell-pmgt.firebaseio.com/tasks');
    $scope.loginObj = $firebaseSimpleLogin(tasksRef);
   // $scope.loginObj2 = simpleLogin(tasksRef);
    
    console.log("$scope.loginObj",$scope.loginObj);
  //  console.log("$scope.loginObj2",$scope.loginObj2);
     console.log("simpleLogin",simpleLogin);
    
    $scope.loginObj.$login('password', {
   email: 'greg@grsdesign.com',
   password: 'porkchop'
}).then(function(user) {
   console.log('Logged in as: ', user.uid);
}, function(error) {
   console.error('Login failed: ', error);
});

var userget = $scope.loginObj.$getCurrentUser();
console.log("userget", userget);

//    simpleLogin.loginPassword('greg@grsdesign.com','porkchop',
//    (function(user) { console.log('Logged in as: ', user.uid)}));

//    
//    
//    var auth = new FirebaseSimpleLogin(tasksRef, function(error, user) {
//      if (error) {
//        // an error occurred while attempting login
//        alert(error);
//      } else if (user) {
//        // user authenticated with Firebase
//        alert('User ID: ' + user.id + ', Provider: ' + user.provider);
//      } else {
//        // user is logged out
//      }
//    });
//  
//console.log("auth",auth);
//console.log("user",user);

//    auth.login('password', {
//      email: 'greg@grsdesign.com',
//      password: 'porkchop'
//    });
//    
    
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
  
