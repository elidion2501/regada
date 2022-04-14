<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServomotorPropertyColumnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servomotor_property_columns', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('servomotor_id')->nullable();
            $table->unsignedBigInteger('row_id')->nullable();
            $table->unsignedBigInteger('column_id')->nullable();
            $table->string('name')->nullable();
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
        Schema::dropIfExists('servomotor_property_columns');
    }
}
