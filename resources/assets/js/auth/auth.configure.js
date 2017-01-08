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
