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











