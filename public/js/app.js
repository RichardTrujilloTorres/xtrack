// (function() {
// 	'use strict';

// 	angular
// 		.module('app.core', [
// 			]);
// })(); 









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
		.value('APP_NAME', APP_NAME);
	
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
		.controller('BillsController', BillsController);

	BillsController.$inject = ['$http'];
	/* @nginject */
	function BillsController($http) {
		var vm = this;

		console.log('BillsController()');
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
			.state('bills', {
				url: '/bills',
				templateUrl: 'templates/bills/index.html',
				controller: 'BillsController as bills' 
			});
	}

})(); 


(function() {
	'use strict';

	angular
		.module('app')
		.controller('CloudController', CloudController);

	CloudController.$inject = ['$http'];
	/* @nginject */
	function CloudController($http) {
		var vm = this;

		console.log('CloudController()');
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
			.state('cloud', {
				url: '/cloud',
				templateUrl: 'templates/cloud/index.html',
				controller: 'CloudController as cloud' 
			});
	}

})(); 


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
		// vm.edit = edit;
		// vm.delete = delete;

		


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


(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('contacts', {
				url: '/contacts',
				templateUrl: 'templates/contacts/index.html',
				controller: 'ContactsController as contacts' 
			});
	}

})(); 


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
		.module('app')
		.controller('DashboardController', DashboardController);
	
	
	DashboardController.$inject = ['dataservice', 'APP_NAME'];
	/* @ngInject */
	function DashboardController(dataservice, APP_NAME) {
		var vm = this;
		vm.APP_NAME = APP_NAME;

		vm.active = 'active';



		Init();


		function Init() {
			// console.log(APP_NAME);
			loadNotifications();
			// setActive();
		}

		// function setActive() {
		// 	vm.active = !vm.active;
		// }


		function loadNotifications() {
			var notifications = dataservice;
			notifications.all('notifications')
				.then(function(response) {
					// console.log(response.data.notifications);
					vm.notifications = response.data.notifications;
				});
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

		$stateProvider
			.state('dashboard', {
				url: '/',
				views: {
					'': {
						templateUrl: 'templates/dashboard/index.html',
						controller: 'DashboardController',
						controllerAs: 'dashboard'
					},
					// 'search@dashboard': {
					// 	// templateUrl: 'templates/search/algolia-autocomplete.html',
					// 	templateUrl: 'templates/dashboard/partials/search.html',
					// 	controller: 'SearchController',
					// 	controllerAs: 'search'
					// },
					// 'navbar@dashboard': {
					// 	templateUrl: 'templates/dashboard/partials/navbar.html',
					// 	controller: 'NavbarController',
					// 	controllerAs: 'dashboard'
					// }
				},
				data: { 
					requiredLogin: true
				} 
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

		$stateProvider
			.state('mailShow', {
				url: '/mail/show/:id',
				templateUrl: 'templates/mail/show.html',
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
		
		// $stateProvider
		// 	.state('navbar', {
		// 		url: '/',
		// 		templateUrl: 'templates/partials/navbar.html',
		// 		controller: 'NavbarController as navbar' 
		// 	});
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


angular.module('myApp', ['algoliasearch', 'algolia.autocomplete'])
  .controller('yourController', ['$scope', 'algolia', function($scope, algolia) {
    var client = algoliasearch("TIF4HGI5L9", "c72729aae4ac818abbbf5f8e4caa09bc");
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

		vm.add = __add;
		vm.edit = __edit;
		vm.delete = __delete;


		getTodoList();



		function __add(form) {
			console.log(form);
		}

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


(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('todos', {
				url: '/todos',
				templateUrl: 'templates/todos/index.html',
				controller: 'TodosController',
				controllerAs: 'todos' 
			});

		$stateProvider
			.state('todosNew', {
				url: '/todos/new',
				templateUrl: 'templates/todos/new.html',
				controller: 'TodosController',
				controllerAs: 'todos' 
			});
	}

})(); 


//# sourceMappingURL=app.js.map
