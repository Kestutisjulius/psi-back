<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Route::get('/reg-page', function () {
//     return Inertia::render('RegPage');
// })->name('reg-page');
    
// Route::get('/dashboard', function () {
//         return Inertia::render('Dashboard');
//     })->middleware(['auth', 'verified'])->name('dashboard');
        
// Route::get('reg-page', [UserController::class, 'create'])->name('reg-page');
        
Route::get('/', function () {
            return Inertia::render('Main');
        });

Route::get('/user', [UserController::class, 'profile'])->middleware(['auth', 'verified'])->name('user-profile');

require __DIR__.'/auth.php';