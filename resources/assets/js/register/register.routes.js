(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	// config.injector = ['$stateProvider', '$urlRouterProvider'];
	/* @ngInject */
	function config($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state('register', {
				url: '/register',
				templateUrl: 'templates/users/register.html',
				controller: 'RegisterController',
				controllerAs: 'register' 
			});
	}

})(); 

