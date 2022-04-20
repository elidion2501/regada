<?php

use App\Http\Controllers\Api\ServomotorsApiController;
use App\Http\Controllers\Api\ServomotorsPropertyColumnsApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/servomotors', [ServomotorsApiController::class, 'index']);
Route::get('/servomotor', [ServomotorsApiController::class, 'show']);
Route::get('/servomotor/propertiesColumn', [ServomotorsPropertyColumnsApiController::class, 'index']);
Route::get('/servomotor/properties', [ServomotorsPropertyColumnsApiController::class, 'ServomotorPropertiesIndex']);
