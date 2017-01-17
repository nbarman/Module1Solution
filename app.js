(function () {
'use strict';
//nbarman
angular.module('LunchCheck', [])

.controller('LunchController', LunchController);

LunchController.inject =['$scope']; //Guarded against minify

//Defining the controller
function LunchController($scope) {

  $scope.message = "No input";
  $scope.appTitle = "Lunch Checker";

  $scope.checkNumLunchItems = function(){
  if($scope.lunchBoxItems == '' || $scope.lunchBoxItems == null){
    $scope.message = "Please enter data first";
  }  else{
              var numOfLunchItems = checkNumOfItems($scope.lunchBoxItems, ',');


                  if(numOfLunchItems <= 3){
                    $scope.message = "Enjoy";
                  } else if(numOfLunchItems > 3){
                    $scope.message = "Too Much!";
                  }}
    };

  function checkNumOfItems(lunchItems, seperator){
    var numOfItems = 0, i;
     var numOfItemsArray = lunchItems.split(seperator);
     for( i=0;i<numOfItemsArray.length;i++){

       if(numOfItemsArray[i]){
          numOfItems++; //checks for empty string between commas
       }
     }
      return numOfItems;
  }


}


})();
