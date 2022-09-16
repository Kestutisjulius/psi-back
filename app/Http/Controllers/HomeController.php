<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function second(){


        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        return response()->json([
            'message' => 'Thank you.',
        ]);
    }
}
