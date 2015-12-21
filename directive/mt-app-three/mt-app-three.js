angular.module('mtApp').directive('mtAppThree', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			page: "="
		},
		templateUrl: 'directive/mt-app-three/mt-app-three.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
