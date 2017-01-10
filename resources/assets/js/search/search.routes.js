(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		// $urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('search', {
				url: '/search',
				// templateUrl: 'templates/search/algolia-autocomplete.html',
				controller: 'SearchController',
				controllerAs: 'search'
			});
	}

})(); 

