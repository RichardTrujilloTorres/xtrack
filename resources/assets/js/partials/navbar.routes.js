(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		// $stateProvider
		// 	.state('navbar', {
		// 		url: '/',
		// 		templateUrl: 'templates/partials/navbar.html',
		// 		controller: 'NavbarController as navbar' 
		// 	});
	}

})(); 

