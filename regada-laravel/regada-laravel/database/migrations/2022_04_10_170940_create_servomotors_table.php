<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServomotorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servomotors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('type_number');
            $table->integer('max_load_torque');
            $table->integer('adjustment_time');
            $table->integer('working_angle_from');
            $table->integer('working_angle_to');
            $table->integer('temperature_from');
            $table->integer('temperature_to');
            $table->integer('coverage_from');
            $table->integer('coverage_to');
            $table->string('working_position');
            $table->integer('weight_from');
            $table->integer('weight_to');
            $table->text('img_path');

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
        Schema::dropIfExists('servomotors');
    }
}
