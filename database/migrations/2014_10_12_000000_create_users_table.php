<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('last_name')->nullable();
            $table->string('url')->nullable();
            $table->string('languages')->nullable();
            $table->string('company')->nullable();
            $table->string('fav_company')->nullable();
            $table->string('first_ip')->nullable();
            $table->string('address')->nullable();
            $table->string('phone_n')->nullable();
            $table->string('IBAN')->nullable();
            $table->string('email')->unique();
            $table->string('username')->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->unsignedTinyInteger('role')->default(1);
            $table->text('article')->nullable();
            $table->string('slogan')->nullable();
            $table->string('photo')->nullable();
            $table->string('degree')->nullable();
            $table->string('work_experience')->nullable();
            $table->unsignedBigInteger('job_id')->nullable();
            $table->foreign('job_id')->references('id')->on('jobs')->onDelete('cascade');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
