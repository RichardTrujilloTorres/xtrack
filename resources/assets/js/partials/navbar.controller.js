(function() {
	'use strict';

	angular
		.module('app')
		.controller('NavbarController', NavbarController);

	/* @ngInject */
	function NavbarController() {
		var vm = this;
		vm.APP_NAME = APP_NAME;

		console.log(vm.APP_NAME);
	}

})();

