<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = match ($request->sort)
        {
            'asc'=> User::orderBy('name', 'asc')->get(),
            'desc'=> User::orderBy('name', 'desc')->get(),
            default => User::orderBy('id', 'desc')->get()
        };
        $msg = $request->session()->get('msg', '');

        return response()->json([
            'users'=>$users, 'msg'=>$msg
        ]);
    }
    public function create()
    {
        return response()->json([
            'roles' => User::roles,
        ]);
    }

}
