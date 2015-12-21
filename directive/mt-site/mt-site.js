angular.module('mtApp').directive('mtSite', function(MultiTransclude) {
	return {
		restrict: 'E',
		replace: true,
		scope: {},
		transclude: true,
		templateUrl: 'directive/mt-site/mt-site.html',
		link: function(scope, element, attrs, ctrl, transclude) {
			MultiTransclude.transclude(element, transclude);
		}
	};
});
