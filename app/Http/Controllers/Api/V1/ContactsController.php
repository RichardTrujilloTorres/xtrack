<?php

namespace App\Http\Controllers\Api\V1;

use App\Contact;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactsController extends BaseController
{
    protected $model = Contact::class;
    protected $resourceName = 'contacts';
	protected $singleResourceName = 'contact';
}
