angular.module('mtApp').directive('mtTarget', function() {
	return {
		restrict: 'E',
		require: "^mtDropdown",
		replace: true,
		scope: {

		},
		transclude: true,
		templateUrl: 'directive/mt-target/mt-target.html',
		link: function(scope, element, attrs, ctrl, transclude) {
			scope.ctrl = ctrl;
		}
	};
});
