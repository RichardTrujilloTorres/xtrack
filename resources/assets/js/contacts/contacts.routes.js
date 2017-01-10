(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('contacts', {
				url: '/contacts',
				templateUrl: 'templates/contacts/index.html',
				controller: 'ContactsController as contacts' 
			});
	}

})(); 

