(function() {
	'use strict';

	angular
		.module('app.core')
		.service('data', data);

	/* ngInject */
	function data($http) {
		var API_URL = 'api/v1/';

		return {
			all: function(resourceUri) {
				return $http.get(URL + resourceUri);
			},
			get: function(resourceUri, id) {
				return $http.get(URL + resourceUri + "/" + id);
			}, 
			save: function(resourceUri, params) {
				return ($http({
					method: 	'POST',
					url: 		URL + "/" + resourceUri,
					headers: 	{ 'Content-Type' : 'application/json' },
					data: 		params
				}));
			},
			put: function(resourceUri, id, params) {
				return $http({
					method: 	'POST',
					url: 		URL + resourceUri + "/" + id,
					headers: 	{ 'Content-Type' : 'application/json' },
					data: 		params
					
				});
			},
			destroy: function(resourceUri, id) {
				return $http.delete(URL + resourceUri + "/" + id);
			}
		};
	}

})();