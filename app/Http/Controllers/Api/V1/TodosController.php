<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TodosController extends BaseController
{
    protected $model = \App\Todo::class;
    protected $resourceName = 'todos';
	protected $singleResourceName = 'todo';
}
