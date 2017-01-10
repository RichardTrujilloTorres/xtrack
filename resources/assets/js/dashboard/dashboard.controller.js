(function() {
	'use strict';

	angular
		.module('app')
		.controller('DashboardController', DashboardController);
	
	
	DashboardController.$inject = ['dataservice'];
	/* @ngInject */
	function DashboardController(dataservice) {
		var vm = this;
		// vm.notifications = {};


		Init();


		function Init() {
			// console.log(APP_NAME);
			loadNotifications();
		}


		function loadNotifications() {
			// console.log('notifications');
			var notifications = dataservice;
			notifications.all('notifications')
				.then(function(response) {
					// console.log(response.data.notifications);
					vm.notifications = response.data.notifications;
				});
		}
		
	}

})(); 