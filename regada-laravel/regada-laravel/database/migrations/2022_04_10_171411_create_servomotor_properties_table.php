<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServomotorPropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servomotor_properties', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('servomotor_id')->nullable();
            $table->unsignedBigInteger('row_id')->nullable();
            $table->unsignedBigInteger('servomotor_property_column_id')->nullable();
            $table->integer('price');
            $table->string('text');
            $table->string('code')->nullable();

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
        Schema::dropIfExists('servomotor_properties');
    }
}
