(function() {
	'use strict';

	angular
		.module('app')
		.controller('TodosController', TodosController);

	TodosController.$inject = ['$http', 'dataservice', 'algolia'];
	/* @nginject */
	function TodosController($http, dataservice, algolia) {
		var vm = this;
		var todosUri = 'todos';

		vm.edit = __edit;
		vm.delete = __delete;


		getTodoList();




		function __delete(index) {
			console.log('delete: ' + index);
		}

		function __edit(index) {
			console.log('edit: ' + index);
		}

		function getTodoList() {
			// console.log(dataservice);
			// var todos = Todo;

			dataservice
				.all(todosUri)
					.success(function(data) {
						console.log(data.todos);
						vm.todos = data.todos;
					})
					.error(function(data) {
						console.log('something went wrong');
					});
		}


	}

})();

