(function() {
	'use strict';

	angular
		.module('app')
		.controller('SearchController', SearchController);

	SearchController.$inject = ['algolia'];
	/* @nginject */
	function SearchController(algolia) {
		var vm = this;

		// vm.search = __search;
		// vm.go = go;

		vm.getDatasets = getDatasets;
		var client = algoliasearch("TIF4HGI5L9", "303b33728655e90db6bdf6c2a445c6ff");
		// TODO: set it dynamically
      	var index = client.initIndex('todos'); 



		function getDatasets() {
			return {
	          source: algolia.sources.hits(index, { hitsPerPage: 5 }), displayKey: 'title',
	          templates: {
	          	suggestion: function(suggestion) {
	                return '<span>' +
	                    suggestion._highlightResult.title.value
	                    + '</span>';
	            }
	          }
	      };
	 	}
	}

})();

