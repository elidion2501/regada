<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AllowedCodeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'servomotor_id' => 1,
            'column_id' => rand(1,7),
            'code' => rand(1,5),
            'allowed_next_code' => rand(5,10),
        ];
    }
}
