<?php

use Illuminate\Http\Request;

$api = app('Dingo\Api\Routing\Router');



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

/**
 * Create all basic routes for a simple rest api
 */
function makeResource($api, $url,$as,$controller){
	$api -> get('/' . $url, [
		'as' => $as . '.index',	
		'uses' => $controller."@index"
		]);
	$api -> get('/' . $url . '/{id}', [
		'as' => $as.'.show',	
		'uses' => $controller."@show"
		]);
	$api -> post('/'.$url.'',		['as' => $as.'.store',	'uses' => $controller."@store"]);
	$api -> post('/'.$url.'/{id}',	['as' => $as.'.update',	'uses' => $controller."@update"]);
	$api -> delete('/'.$url.'/{id}',	['as' => $as.'.destroy','uses' => $controller."@destroy"]);
}


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:api');


// TODO: Dingo API Endpoints 

/*
 |--------------------------------------------------------------------------
 | API Endpoints
 |--------------------------------------------------------------------------
*/

$api -> version('v1', [
	'namespace' => 'App\Http\Controllers\Api\V1',
	'prefix' => 'api/v1',
	], function($api) {


	# Login
	$api -> post('/auth/login',[
		'as' => 'auth.login',
		'uses' => 'AuthController@login'
	]);

	# Registration
	$api -> post('/auth/register',[
	    'as' => 'auth.register',
	    'uses' => 'AuthController@register'
	]);

	# Users
	$api -> resource('/users', 'UserController');

	# Todos
	$api -> resource('/todos', 'TodosController');

	# Contacts
	$api -> resource('/contacts', 'ContactsController');

	# Notifications
	$api -> resource('/notifications', 'NotificationsController');



	$api -> get('test', function() {
		return 'All good';
	});
	
	# Admin
	
});