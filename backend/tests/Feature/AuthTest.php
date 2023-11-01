<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class AuthTest extends TestCase
{
    public function testRegister()
    {
        $response = $this->json('POST', route('register'), [
            'name'  =>  $name = 'Test',
            'email'  =>  $email = time().'test@example.com',
            'password'  =>  $password = '123456789',
            'c_password'  =>  $password = '123456789',
        ]);

        //Write the response in laravel.log
        \Log::info(1, [$response->getContent()]);

        $response->assertStatus(200);
    }

    public function testLogin()
    {
        $response = $this->json('POST',route('login'),[
            'email' => '1698859950@example.com',
            'password' => '123456789',
        ]);
        \Log::info(1, [$response->getContent()]);

        $response->assertStatus(200);
    }
}
