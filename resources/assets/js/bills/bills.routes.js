(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('bills', {
				url: '/bills',
				templateUrl: 'templates/bills/index.html',
				controller: 'BillsController as bills' 
			});
	}

})(); 

