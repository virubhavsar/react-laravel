
## Laravel Passport

- composer require laravel/passport
- php artisan passport:install
- php artisan migrate
- App\Models\User - use Laravel\Passport\HasApiTokens;
- config/auth.php -
    'api' => [
            'driver' => 'passport',
            'provider' => 'users',
        ],


## Generate test cases
- php artisan make: test AuthTest

RUN the test cases
- ./vendor/bin/phpunit tests/Feature/AuthTest.php
