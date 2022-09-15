<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function second(){

        return response()->json([
            'message' => 'Thank you.',
        ]);
    }
}
