(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('cloud', {
				url: '/cloud',
				templateUrl: 'templates/cloud/index.html',
				controller: 'CloudController as cloud' 
			});
	}

})(); 

