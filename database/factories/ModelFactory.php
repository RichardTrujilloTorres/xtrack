<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});


$factory->define(App\Notification::class, function (Faker\Generator $faker) {
    return [
        'body' => $faker->sentence,
        'level' => random_int(1, 3),
    ];
});

$factory->define(App\Contact::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'phone_number' => $faker->phoneNumber,
        'facebook_url' => $faker->url,
        'linkedin_url' => $faker->url,
    ];
});

$factory->define(App\Mail::class, function (Faker\Generator $faker) {
    return [
        'sender' => $faker->unique()->safeEmail,
        'subject' => $faker->sentence,
        'body' => $faker->text,
    ];
});