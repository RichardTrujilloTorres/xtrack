<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Mail;
use Illuminate\Http\Request;

class MailsController extends BaseController
{
    protected $model = Mail::class;
    protected $resourceName = 'mails';
	protected $singleResourceName = 'mail';
}
