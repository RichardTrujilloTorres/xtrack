(function() {
	'use strict';

	angular
		.module('app')
		.controller('ContactsController', ContactsController);

	ContactsController.$inject = ['$http', 'dataservice'];
	/* @nginject */
	function ContactsController($http, dataservice) {
		var vm = this;
		var contactsUri = 'contacts';


		getContactList();


		function getContactList() {
			console.log(dataservice);
			// var todos = Todo;

			dataservice
				.all(contactsUri)
					.success(function(data) {
						console.log(data);
						vm.contacts = data.contacts;
					})
					.error(function(data) {
						console.log('something went wrong');
					});
		}
	}

})();

