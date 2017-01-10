<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Dingo\Api\Routing\Helpers;

abstract class BaseController extends Controller
{
	use Helpers;
	
	protected $model;
	protected $resourceName;
	protected $singleResourceName;

	/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // TODO: set up pagination when asked for it
        $resource = $this -> model::all();
        return response([
        	$this -> resourceName => $resource -> toArray(),
        	], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $resource = new $this -> model;

        try {
        	$resource -> fill($request -> all());
        	$resource -> save();
        } catch (Exception $e) {
        	return response([
	        	'error' => 'Could not create resource',
	        	], 500);
        }
        
        return response([
        	$this -> singleResourceName => $resource,
        	], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $resource = $this -> model::where('id', $id) -> first();
        if (! $resource) {
        	return response(['error' => 'No result found'], 404);
        }

        return response([
        	$this -> singleResourceName => $resource,
        	], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $resource = $this -> model::findOrFail($id);
        try {
        	$resource -> fill($request -> all());
        	$resource -> save();
        } catch (Exception $e) {
        	return response([
	        	'error' => 'Could not update resource',
	        	], 500);
        }
        
        return response([
        	$this -> singleResourceName => $resource,
        	], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $resource = $this -> model::where('id', $id) -> first();
        if (! $resource) {
        	return response(['error' => 'No result found'], 404);
        }

        try {
        	$resource -> delete();
        } catch (Exception $e) {
        	return response([
	        	'error' => 'Could not delete resource',
	        	], 500);
        }
        
        return response([
        	'success' => 'Resource successfully deleted',
        	], 201);
    }
    
}
