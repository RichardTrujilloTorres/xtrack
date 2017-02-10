<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
   	protected $fillable = [
   		'sender',
   		'subject',
   		'body',
   	];

   	// TODO: block/allow sender
   	// TODO: category management
}
