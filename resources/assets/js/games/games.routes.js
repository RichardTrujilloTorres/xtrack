(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('games', {
				url: '/games',
				templateUrl: 'templates/games/index.html',
				controller: 'GamesController as games' 
			});
	}

})(); 

