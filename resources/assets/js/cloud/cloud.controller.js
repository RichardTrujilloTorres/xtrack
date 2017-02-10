(function() {
	'use strict';

	angular
		.module('app')
		.controller('CloudController', CloudController);

	CloudController.$inject = ['$http'];
	/* @nginject */
	function CloudController($http) {
		var vm = this;

		console.log('CloudController()');
	}

})();

