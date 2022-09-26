<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;

Route::get('/', function () {
            return Inertia::render('Main');
        })->name('main');


Route::get('/user', [UserController::class, 'profile'])->middleware(['auth', 'verified'])->name('user-profile');

require __DIR__.'/auth.php';
