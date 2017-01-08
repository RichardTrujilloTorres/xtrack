(function() {
	'use strict';

	angular
		.module('app')
		.controller('GamesController', GamesController);

	GamesController.$inject = ['$http'];
	function GamesController($http) {
		var vm = this;

		console.log('GamesController()');
	}

})();

