<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends BaseController
{
    protected $model = \App\User::class;
    protected $resourceName = 'users';
	protected $singleResourceName = 'user';
}
