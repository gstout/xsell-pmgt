'use strict';
  
angular.module('xsellPmgtApp')
  .controller('LocationsCtrl', function ($scope, $firebase) {
    var locationsRef = new Firebase('https://xsell-pmgt.firebaseio.com/locations');
    $scope.locations = $firebase(locationsRef);
     
//     $scope.locations = [
//      {id:1, name:'Location1' },
//      {id:2, name:'Location2' }
//    ];
//    
     
     // funtion to delete tasks fomr the list
    $scope.deleteLocation = function(id){
      // alert("Do you want to delete ".$scope.location.id);
      $scope.locations.$remove(id);
    };
  });
  

angular.module('xsellPmgtApp')
  .controller('AddLocationsCtrl', function ($scope, $firebase, $location) {
    var locationsRef = new Firebase('https://xsell-pmgt.firebaseio.com/locations');
    $scope.locations = $firebase(locationsRef);

//    $scope.locations = [
//      {id:1, name:'Location1' },
//      {id:2, name:'Location2' }
//    ];
//    
    $scope.addLocation = function(){
      $scope.locations.$add({
        name:$scope.locationName,
        description:$scope.locationDescription,
      });
      $scope.locationName ='';
      $scope.locationDescription ='';
      $location.path('/locations');
    };
  });
  
   
  
  
