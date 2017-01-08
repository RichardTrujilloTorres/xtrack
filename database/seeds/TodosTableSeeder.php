<?php

use App\Todo;
use Illuminate\Database\Seeder;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Todo::create([
        	'title'	=> 'clean the house',
        	'body'	=> 'take all the bugs out and clean it all up',
        	'category'	=> 'routine',
        	'time_frame' => 'weekly',
        	]);

        Todo::create([
        	'title'	=> 'WMS docs',
        	'body'	=> 'keep working on the WMS documentation',
        	'category'	=> 'work',
        	'time_frame' => 'long-term',
        	]);
    }
}
