angular.module('mtApp').directive('mtAppOne', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			page: "="
		},
		templateUrl: 'directive/mt-app-one/mt-app-one.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
