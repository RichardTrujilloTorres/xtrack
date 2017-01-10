(function() {
	'use strict';

	angular
		.module('app')
		.controller('DashboardController', DashboardController);
	
	
	DashboardController.$inject = ['dataservice', 'APP_NAME'];
	/* @ngInject */
	function DashboardController(dataservice, APP_NAME) {
		var vm = this;
		vm.APP_NAME = APP_NAME;

		vm.active = 'active';



		Init();


		function Init() {
			// console.log(APP_NAME);
			loadNotifications();
			// setActive();
		}

		// function setActive() {
		// 	vm.active = !vm.active;
		// }


		function loadNotifications() {
			var notifications = dataservice;
			notifications.all('notifications')
				.then(function(response) {
					// console.log(response.data.notifications);
					vm.notifications = response.data.notifications;
				});
		}
		
	}

})(); 