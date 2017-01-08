(function() {
	'use strict';

	angular
		.module('app')
		.controller('MailController', MailController);

	MailController.$inject = ['$http'];
	function MailController($http) {
		var vm = this;

		console.log('MailController()');
	}

})();

