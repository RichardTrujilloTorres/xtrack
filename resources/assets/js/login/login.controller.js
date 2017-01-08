(function() {
	'use strict';

	angular
		.module('app')
		.controller('LoginController', LoginController);

	/* @ngInject */
	function LoginController($state, $auth) {
		var vm = this;
		vm.user = {};
		vm.login = __login;

		function __login() {
			console.log(vm.user);
			$auth.login({	
		      email: vm.user.email,
		      password: vm.user.password
		    }).then(function (data, headers, status, config) {	
		      $state.go('dashboard');
		    }).catch(function (response) {
		      console.log(response);
		    });
		}

	}

})();



