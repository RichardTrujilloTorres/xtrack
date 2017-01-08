(function() {
	'use strict';

	angular
		.module('app.core', [
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
			console.log(APP_NAME);
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
				url: '/dashboard',
				templateUrl: 'templates/users/dashboard.html',
				controller: 'DashboardController',
				controllerAs: 'dashboard',
				data: { requiredLogin: true } 
			});
	}

})(); 
(function() {
	'use strict';

	angular
		.module('app')
		.controller('GamesController', GamesController);

	GamesController.$inject = ['$http'];
	function GamesController($http) {
		var vm = this;

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
(function() {
	'use strict';

	angular
		.module('app')
		.controller('TodosController', TodosController);

	TodosController.$inject = ['$http'];
	function TodosController($http) {
		var vm = this;

		console.log('TodosController()');
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
				controller: 'TodosController as todos' 
			});
	}

})(); 


//# sourceMappingURL=app.js.map
