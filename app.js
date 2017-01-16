(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchController', LunchController);

LunchController.inject =['$scope']; //Guarded against minify

//Defining the controller
function LunchController($scope) {

  $scope.message = "No input";
  $scope.appTitle = "MyLunchChecker";

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
     var numOfItems = lunchItems.split(seperator);
      return numOfItems.length;
  }


}


})();
