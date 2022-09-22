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
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('title')->default('programmer');
            $table->string('organizer')->nullable();
            $table->string('requirements')->default('JUNIOR, bachelor, EN-fluently');
            $table->string('location')->default('Vilnius, Gedimino av. 9');
            $table->string('skills')->default('Experience with Node.js, Javascript, Typescript, Serverless, and REST APIs');
            $table->text('about')->default('Work with a Scrum team that consists of up to 10 people and is supported by the professional Project Manager/Scrum Master.');
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
        Schema::dropIfExists('jobs');
    }
};
