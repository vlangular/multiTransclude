angular.module('mtApp').directive('mtDropdown', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		transclude: true,
		templateUrl: 'directive/mt-dropdown/mt-dropdown.html',
		controller: function($scope) {
			var that = this;
			$scope.toggleTarget = function() {
				that.targetOpen = !that.targetOpen;
			};
		}
	};
});
