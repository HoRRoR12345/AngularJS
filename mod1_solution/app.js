(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckCtrl', LunchCheckCtrl);

    LunchCheckCtrl.$inject =  ['$scope'];
    function LunchCheckCtrl($scope) {
      $scope.lunchItems = "";

      $scope.checkLunch = function () {
        // var seperator = /\w*\,\w*/;
        // console.log(splitString($scope.lunchItems, seperator));
        var numberOfLunchItems = splitString($scope.lunchItems, ',').length;

        if ($scope.lunchItems === "") {
          $scope.message = "Please enter data first.";
          $scope.textareaCSS = "textarea-warning";
          $scope.paragraphCSS = "paragraph-warning";
        }
        else {
          if (numberOfLunchItems <= 3) {
            $scope.message = "Enjoy :)";
          }
          else {
            $scope.message = "Too much!";
          }
          $scope.textareaCSS = "textarea-success";
          $scope.paragraphCSS = "paragraph-success";
        }

      };

      function splitString(stringToSplit, seperator) {
        var arrayOfStrings = stringToSplit.split(seperator);
        return arrayOfStrings;
      }

    }

})();
