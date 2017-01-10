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

		vm.getDatasets = getDatasets;




		getTodoList();

		function getDatasets() {
			return {
	          source: algolia.sources.hits(index, { hitsPerPage: 5 }),
	          //value to be displayed in input control after user's suggestion selection
	          displayKey: 'title',
	          //hash of templates used when rendering dataset
	          templates: {
	            //'suggestion' templating function used to render a single suggestion
	            suggestion: function(suggestion) {
	                return '<span>' +
	                    suggestion._highlightResult.title.value
	                    + '</span>';
	            }
	          }
	      };

	  	}



		function __delete(index) {
			console.log('delete: ' + index);
		}

		function __edit(index) {
			console.log('edit: ' + index);
		}
		// vm.todosUri = todosUri;


		// console.log('TodosController(' + APP_NAME + ')');

		// retrive todo listing

		


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

