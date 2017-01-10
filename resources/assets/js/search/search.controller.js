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

		console.log('SearchController()');
	}

})();

