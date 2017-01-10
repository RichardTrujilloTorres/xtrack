(function() {
	'use strict';

	angular
		.module('app')
		.controller('DashboardController', DashboardController);
	
	
	/* @ngInject */
	function DashboardController() {
		var vm = this;


		Init();


		function Init() {
			// console.log(APP_NAME);
		}

		
	}

})(); 