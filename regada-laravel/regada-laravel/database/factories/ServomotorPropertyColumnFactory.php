<?php

namespace Database\Factories;

use App\Models\Servomotor;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServomotorPropertyColumnFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'servomotor_id' => rand(1,3),
            'row_id' => rand(1,5),
            'column_id' => rand(1,8),
            'name' => $this->faker->name(),
        ];
    }
}
