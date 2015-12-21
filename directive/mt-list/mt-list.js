angular.module('mtApp').directive('mtList', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			items: "=",
			selected: "=",
			orientation: "@"
		},
		templateUrl: 'directive/mt-list/mt-list.html',
		link: function(scope, element, attrs, fn) {
			scope.selectItem = function(item) {
				scope.selected = item;
		    };
		}
	};
});
