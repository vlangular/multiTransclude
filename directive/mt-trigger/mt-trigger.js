angular.module('mtApp').directive('mtTrigger', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		transclude: true,
		templateUrl: 'directive/mt-trigger/mt-trigger.html',
		link: function(scope, element, attrs, ctrl, transclude) {
		}
	};
});
