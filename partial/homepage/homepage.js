angular.module('mtApp').controller('HomepageCtrl',function($scope){

      $scope.menu = {
        list: [
          "Home",
          "About",
          "Services",
          "Contact"
        ],
        current: "Home"
      };

});
