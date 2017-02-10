(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		// $urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('mail', {
				url: '/mail',
				templateUrl: 'templates/mail/index.html',
				controller: 'MailController as mail' 
			});

		$stateProvider
			.state('mailShow', {
				url: '/mail/show/:id',
				templateUrl: 'templates/mail/show.html',
				controller: 'MailController as mail' 
			});
	}

})(); 

