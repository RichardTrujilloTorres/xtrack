(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('login', {
				url: '/',
				templateUrl: 'templates/users/login.html',
				controller: 'LoginController',
				controllerAs: 'login' 
			});
	}

})(); 