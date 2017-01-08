<?php

use App\Todo;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/


Route::get('/search', function(Request $request) {

	$todos = new Todo;

	if (null != $request->get('query')) {
		$matchs = $todos->search($request->get('query'));
		if ($matchs['hits']) {
			return response()->json(['matchs' => $matchs['hits']], 200);
		}

		return response()->json(['error' => "No match found."]);
	}

	dd("No query");


	// dummy modification
	


	
});


Route::get('/sync', 'DashboardController@sync');

Route::get('/', function() {
	return view('index');
});

Route::get('/dashboard', 'DashboardController@index');


# Test
Route::get('/test/bot', 'TestController@bot');


