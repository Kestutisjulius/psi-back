<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'last_name'=> 'tee',
            'username'=> 'tester',
            'email' => 'test@example.com',
            'password'=> Hash::make('test')
        ]);

        $faker = Faker::create();

//        DB::table('jobs')->insert([
//            'organizer' => $faker->company
//        ]);
    }
}
