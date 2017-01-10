(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	/* @ngInject */
	function config($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('dashboard', {
				url: '/',
				views: {
					'': {
						templateUrl: 'templates/dashboard/index.html',
						controller: 'DashboardController',
						controllerAs: 'dashboard'
					},
					// 'search@dashboard': {
					// 	// templateUrl: 'templates/search/algolia-autocomplete.html',
					// 	templateUrl: 'templates/dashboard/partials/search.html',
					// 	controller: 'SearchController',
					// 	controllerAs: 'search'
					// },
					// 'navbar@dashboard': {
					// 	templateUrl: 'templates/dashboard/partials/navbar.html',
					// 	controller: 'NavbarController',
					// 	controllerAs: 'dashboard'
					// }
				},
				data: { 
					requiredLogin: true
				} 
			});

		
	}

})(); 