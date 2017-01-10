(function() {
	'use strict';

	angular
		.module('app')
		.controller('GamesController', GamesController);

	GamesController.$inject = ['$http', 'algolia'];
	function GamesController($http, algolia) {
		var vm = this;
		var index = 'house';
		var client = algoliasearch("TIF4HGI5L9", "822f952aefc6927aa0ce8ab0853b29cb");
		var index = client.initIndex('todos');

		vm.getDatasets = function() {
	      return {
	        source: algolia.sources.hits(index, { hitsPerPage: 5 }),
	        //value to be displayed in input control after user's suggestion selection
	        displayKey: 'todos',
	        //hash of templates used when rendering dataset
	        templates: {
	          //'suggestion' templating function used to render a single suggestion
	          suggestion: function(suggestion) {
	              return '<span>' +
	                  suggestion._highlightResult.name.value + '</span><span>' +
	                  suggestion._highlightResult.team.value + '</span>';
	          }
	        }
	      };
    	};

    	console.log(vm.getDatasets());


    	// vm.search = __search;

    	// function __search() {

    	// }

		console.log('GamesController()');
	}

})();

