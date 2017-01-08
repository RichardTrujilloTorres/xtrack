<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;

use Tymon\JWTAuth\JWTAuth;
use JWTAuthException;

use App\User;


class AuthController extends Controller
{
    private $user;
    private $jwtAuth;

    public function __construct(User $user, JWTAuth $jwtAuth) {
        $this -> user = $user;
        $this -> jwtAuth = $jwtAuth;
    }

    /**
     * User login.
     *
     * @param \App\Http\Requests\LoginRequest $request         
     * @return \Illuminate\Http\Response         
     */
    public function login(LoginRequest $request) {
        $credentials = $request -> only('email', 'password');
        $token = null;

		try {
			// $token =  $request -> get('email');
            $token = $this -> jwtAuth -> attempt($credentials);
            if (! $token) {
                return response() -> json(['Invalid email or password'], 422);
            }
        } catch (JWTAuthException $e) {
            return response() -> json(['Cannot create token'], 500);
        }

         return response() -> json(compact('token'));
    }

    /**
     * User registration.
     *
     * @param \App\Http\Requests\RegisterRequest $request         
     * @return \Illuminate\Http\Response         
     */
    public function register(RegisterRequest $request) {
        $user = $this -> user -> create([
            'name' => $request -> get('name'),
            'email' => $request -> get('email'),
            'password' => \Hash::make($request -> get('password')),
            ]);

        if (! $user) {
            return response() -> json(['Cannot register user'], 500);
        }

        return response() -> json([
            'token' => $this -> jwtAuth -> fromUser($user)
            ]);
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
