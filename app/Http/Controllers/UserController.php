<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

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
        return Inertia::render('RegPage', ['roles' => User::ROLES]);
        // response()->json([
        //     'roles' => User::roles,
        // ]);
    }

}
