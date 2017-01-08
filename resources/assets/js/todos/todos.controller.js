(function() {
	'use strict';

	angular
		.module('app')
		.controller('TodosController', TodosController);

	TodosController.$inject = ['$http'];
	function TodosController($http) {
		var vm = this;

		console.log('TodosController()');
	}

})();

