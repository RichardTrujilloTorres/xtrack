<?php

namespace App;

use AlgoliaSearch\Laravel\AlgoliaEloquentTrait;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
	use AlgoliaEloquentTrait;
	
    protected $fillable = [
    	'title', 
    	'body', 
    	'time_frame', 
    	'category',
    	];
}
