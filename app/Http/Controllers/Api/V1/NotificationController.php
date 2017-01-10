<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NotificationsController extends BaseController
{
    protected $model = \App\Notification::class;
    protected $resourceName = 'notifications';
	protected $singleResourceName = 'notification';
}
