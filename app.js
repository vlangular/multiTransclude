angular.module('mtApp', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('mtApp').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('homepage', {
        url: '/',
        templateUrl: 'partial/homepage/homepage.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('mtApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
