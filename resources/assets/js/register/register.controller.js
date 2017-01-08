(function() {
	'use strict';

	angular
		.module('app')
		.controller('RegisterController', RegisterController);

	// RegisterController.$inject = [];
	/* @ngInject */
	function RegisterController($state, $auth) {
		var vm = this;
		vm.user = {};
		vm.register = __register;
		



		console.log('RegisterController()');


		function __register() {
			console.log(vm.user);

			$auth.signup({	
		      	email: vm.user.email,
		      	password: vm.user.password,
		      	name: vm.user.name
		    }).then(function (response) {
		    	$state.go('dashboard');
		    }).catch(function (response) {
		      	console.log(response);
		    });
		}
		
	}

})();




