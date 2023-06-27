<?php

require "vendor/autoload.php";

use App\controllers\AdminController;
use App\controllers\UserController;

use App\Router;

$usercontroller = new UserController;

// $usercontroller->profile();


$router = new Router();

$usercontroller = new UserController;

// User Authentication
$router->get('/api/v1/user-profile', [new UserController, 'profile']);
$router->post('/api/v1/signup/', [new UserController, 'signup']);
$router->post('/api/v1/login/', [new UserController, 'login']);


// admin Authebtication route
$router->get('/api/v1/admin-profile', [new AdminController, 'profile']);
$router->post('/api/v1/admin-signup/', [new AdminController, 'signup']);
$router->post('/api/v1/admin-login/', [new AdminController, 'login']);
$router->resolve();
