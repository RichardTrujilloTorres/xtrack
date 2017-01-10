// (function() {
// 	'use strict';

// 	angular
// 		.module('app.core', [
// 			]);
// })(); 



(function() {
	'use strict';

	angular
		.module('app.core', [
			'algoliasearch', 
			'algolia.autocomplete'
		]);
		

})();






(function() {
	'use strict';

	angular
		.module('app', [
			'ui.router',
			'ngCookies',
			// 'app.core',
			'auth',
			'app.core'
			]);
})(); 










(function() {

    'use strict';

    angular
        .module('app')
        .config(config);

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider, $authProvider) {

    	// TODO: setup a global for the domain
    	$authProvider.loginUrl = '/api/v1/auth/login';
  		$authProvider.signupUrl = '/api/v1/auth/register';
    }

}());

(function() {
    'use strict';

    angular
        .module('auth', [
            'satellizer'
        ]);

}());
(function() {

    'use strict';

    angular
        .module('auth')
        .run(appRun);

    // appRun.$inject = ['$rootScope', '$urlRouterProvider', '$stateProvider', 'AuthProvider'];
    /* @ngInject */
    function appRun($rootScope, $state, $auth) {
    	$rootScope.$on('$routeChangeStart', 
    	function(event, toState) {
    		var requiredLogin = false;

    		// console.log('monitoring state...');
    		if (toState.data && toState.data.requiredLogin) {
    			requiredLogin = true;
    		}

    		if (requiredLogin && !$auth.isAuthenticated()) {
    			event.preventDefault();
                $state.go('login');
    		}
    	});
    }

}());

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
(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	/* @ngInject */
	function config($stateProvider, $urlRouterProvider) {
		
		// $stateProvider
		// 	.state('dashboard', {
		// 		url: '/dashboard',
		// 		templateUrl: 'templates/users/dashboard.html',
		// 		controller: 'DashboardController',
		// 		controllerAs: 'dashboard',
		// 		data: { requiredLogin: true } 
		// 	});

		// $stateProvider
		// 	.state('search', {
		// 		url: '/dashboard',
		// 		templateUrl: 'templates/users/dashboard.html',
		// 		controller: 'DashboardController',
		// 		controllerAs: 'dashboard',
		// 		data: { requiredLogin: true } 
		// 	});

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				views: {
					'': {
						templateUrl: 'templates/users/dashboard.html',
						controller: 'DashboardController as dummy',
					},
					'search@dashboard': {
						templateUrl: 'templates/search/algolia-autocomplete.html',
						controller: 'SearchController as search',
					}
				},
				data: { requiredLogin: true } 
			});
	}

})(); 
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


(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('games', {
				url: '/games',
				templateUrl: 'templates/games/index.html',
				controller: 'GamesController as games' 
			});
	}

})(); 


(function() {
	'use strict';

	angular
		.module('app')
		.controller('LoginController', LoginController);

	/* @ngInject */
	function LoginController($state, $auth) {
		var vm = this;
		vm.user = {};
		vm.login = __login;

		function __login() {
			console.log(vm.user);
			$auth.login({	
		      email: vm.user.email,
		      password: vm.user.password
		    }).then(function (data, headers, status, config) {	
		      $state.go('dashboard');
		    }).catch(function (response) {
		      console.log(response);
		    });
		}

	}

})();




(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('login', {
				url: '/',
				templateUrl: 'templates/users/login.html',
				controller: 'LoginController',
				controllerAs: 'login' 
			});
	}

})(); 
(function() {
	'use strict';

	angular
		.module('app')
		.controller('MailController', MailController);

	MailController.$inject = ['$http'];
	function MailController($http) {
		var vm = this;

		console.log('MailController()');
	}

})();


(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		// $urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('mail', {
				url: '/mail',
				templateUrl: 'templates/mail/index.html',
				controller: 'MailController as mail' 
			});
	}

})(); 


(function() {
	'use strict';

	angular
		.module('app')
		.controller('NavbarController', NavbarController);

	/* @ngInject */
	function NavbarController() {
		var vm = this;
		vm.APP_NAME = APP_NAME;

		console.log(vm.APP_NAME);
	}

})();


(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('navbar', {
				url: '/',
				templateUrl: 'templates/partials/navbar.html',
				controller: 'NavbarController as navbar' 
			});
	}

})(); 


(function() {
	'use strict';

	angular
		.module('app')
		.controller('RegisterController', RegisterController);

	// RegisterController.$inject = [];
	/* @ngInject */
	function RegisterController($state, $auth) {
		var vm = this;
		vm.user = {};
		vm.register = __register;
		



		console.log('RegisterController()');


		function __register() {
			console.log(vm.user);

			$auth.signup({	
		      	email: vm.user.email,
		      	password: vm.user.password,
		      	name: vm.user.name
		    }).then(function (response) {
		    	$state.go('dashboard');
		    }).catch(function (response) {
		      	console.log(response);
		    });
		}
		
	}

})();





(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	// config.injector = ['$stateProvider', '$urlRouterProvider'];
	/* @ngInject */
	function config($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state('register', {
				url: '/register',
				templateUrl: 'templates/users/register.html',
				controller: 'RegisterController',
				controllerAs: 'register' 
			});
	}

})(); 


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


(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		// $urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('search', {
				url: '/search',
				// templateUrl: 'templates/search/algolia-autocomplete.html',
				controller: 'SearchController',
				controllerAs: 'search'
			});
	}

})(); 


angular.module('myApp', ['algoliasearch', 'algolia.autocomplete'])
  .controller('yourController', ['$scope', 'algolia', function($scope, algolia) {
    var client = algoliasearch("TIF4HGI5L9", "822f952aefc6927aa0ce8ab0853b29cb");
    var index = client.initIndex('YourIndex');
    $scope.getDatasets = function() {
      return {
        source: algolia.sources.hits(index, { hitsPerPage: 5 }),
        //value to be displayed in input control after user's suggestion selection
        displayKey: 'name',
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
  }]);
(function() {
	'use strict';

	angular
		.module('app.core')
		.service('dataservice', data);

	/* ngInject */
	function data($http) {
		var URL = 'api/v1/';

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


(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		// $urlRouterProvider.otherwise('/#dashboard');
		
		$stateProvider
			.state('todos', {
				url: '/todos',
				templateUrl: 'templates/todos/index.html',
				controller: 'TodosController',
				controllerAs: 'todos' 
			});
	}

})(); 


//# sourceMappingURL=app.js.map
