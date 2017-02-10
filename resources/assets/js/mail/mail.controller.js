(function() {
	'use strict';

	angular
		.module('app')
		.controller('MailController', MailController);

	MailController.$inject = ['$http', 'dataservice', '$stateParams'];
	function MailController($http, dataservice, $stateParams) {
		var vm = this;
		var todosUri = 'mails';

		vm.remove = remove;
		vm.add = add;
		vm.select = select;


		init();



		function init() {

			if ($stateParams.id) {
				loadSingle($stateParams.id);
				return;
			}

			// TODO: cache/local storage
			dataservice
				.all(todosUri)
					.success(function(data) {
						console.log(data.mails);
						vm.mails = data.mails;
					})
					.error(function(data) {
						console.log('something went wrong');
					});
		}

		function loadSingle(id) {
			dataservice
				.get(todosUri, id)
					.success(function(data) {
						console.log(data.mail);
						vm.mail = data.mail;
					})
					.error(function(data) {
						console.log('something went wrong');
					});
		}

		function select(id) {
			vm.selected.push(id);
			console.log(vm.selected);
		}

		function remove() {
			// if (! vm.selected) {
			// 	console.log('no mail selected');
			// }
			
		}

		function add() {
			console.log('add');
		}


	}

})();

