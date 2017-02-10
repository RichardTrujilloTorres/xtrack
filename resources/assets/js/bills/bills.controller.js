(function() {
	'use strict';

	angular
		.module('app')
		.controller('BillsController', BillsController);

	BillsController.$inject = ['$http'];
	/* @nginject */
	function BillsController($http) {
		var vm = this;

		console.log('BillsController()');
	}

})();

