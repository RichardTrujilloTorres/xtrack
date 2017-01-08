(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	/* @ngInject */
	function config($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: 'templates/users/dashboard.html',
				controller: 'DashboardController',
				controllerAs: 'dashboard',
				data: { requiredLogin: true } 
			});
	}

})(); 