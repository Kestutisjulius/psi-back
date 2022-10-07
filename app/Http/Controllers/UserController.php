<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Auth;

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
    // public function create()
    // {
    //     return Inertia::render('RegPage', ['roles' => User::ROLES]);
    // }
    public function settings(){
       $id = Auth::user()->id;
       
       $user = User::where('id', $id)
                    ->first();

        return Inertia::render('Settings', ['user' => $user]);
    }

    public function profile(){
        
       $id = Auth::user()->id;
       
       $user = User::where('id', $id)
                    ->first();

        return Inertia::render('Profile', ['user' => $user]);
    }

    public function jobfeed(){
        
       $id = Auth::user()->id;
       
       $user = User::where('id', $id)
                    ->first();

        return Inertia::render('JobFeed', ['user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        $user->name = $request->name; 
        $user->last_name = $request->last_name; 
        $user->username = $request->username; 
        $user->slogan = $request->slogan; 
        $user->article = $request->article; 
        $user->url = $request->url; 
        $user->degree = $request->degree; 
        $user->work_experience = $request->work_experience; 
        $user->job_id = $request->work_job_id; 
        $user->email = $request->email; 
        $user->phone_n = $request->phone_n; 
        $user->address = $request->address; 
        $user->languages = $request->languages; 
        $user->company = $request->company; 
        $user->fav_company = $request->fav_company; 
        $user->first_ip = $request->first_ip; 
        $user->save();
        return Inertia::render('Profile', ['user' => $user]);
    }
}
