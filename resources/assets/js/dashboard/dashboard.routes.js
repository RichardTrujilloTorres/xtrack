(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	/* @ngInject */
	function config($stateProvider, $urlRouterProvider) {
		
		// $stateProvider
		// 	.state('dashboard', {
		// 		url: '/dashboard',
		// 		templateUrl: 'templates/users/dashboard.html',
		// 		controller: 'DashboardController',
		// 		controllerAs: 'dashboard',
		// 		data: { requiredLogin: true } 
		// 	});

		// $stateProvider
		// 	.state('search', {
		// 		url: '/dashboard',
		// 		templateUrl: 'templates/users/dashboard.html',
		// 		controller: 'DashboardController',
		// 		controllerAs: 'dashboard',
		// 		data: { requiredLogin: true } 
		// 	});

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				views: {
					'': {
						templateUrl: 'templates/users/dashboard.html',
						controller: 'DashboardController as dummy',
					},
					'search@dashboard': {
						templateUrl: 'templates/search/algolia-autocomplete.html',
						controller: 'SearchController as search',
					}
				},
				data: { requiredLogin: true } 
			});
	}

})(); 