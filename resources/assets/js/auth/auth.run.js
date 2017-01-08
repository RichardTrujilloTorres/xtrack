(function() {

    'use strict';

    angular
        .module('auth')
        .run(appRun);

    // appRun.$inject = ['$rootScope', '$urlRouterProvider', '$stateProvider', 'AuthProvider'];
    /* @ngInject */
    function appRun($rootScope, $state, $auth) {
    	$rootScope.$on('$routeChangeStart', 
    	function(event, toState) {
    		var requiredLogin = false;

    		// console.log('monitoring state...');
    		if (toState.data && toState.data.requiredLogin) {
    			requiredLogin = true;
    		}

    		if (requiredLogin && !$auth.isAuthenticated()) {
    			event.preventDefault();
                $state.go('login');
    		}
    	});
    }

}());
