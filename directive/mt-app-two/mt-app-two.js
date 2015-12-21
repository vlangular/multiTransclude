angular.module('mtApp').directive('mtAppTwo', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			page: "="
		},
		templateUrl: 'directive/mt-app-two/mt-app-two.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
