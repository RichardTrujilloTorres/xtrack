(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		// $urlRouterProvider.otherwise('/#dashboard');
		
		$stateProvider
			.state('todos', {
				url: '/todos',
				templateUrl: 'templates/todos/index.html',
				controller: 'TodosController as todos' 
			});
	}

})(); 

