<?php

namespace Database\Factories;

use App\Models\Servomotor;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServomotorPropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'servomotor_id' => Servomotor::factory(),
            'row_id' => rand(1,5),
            'servomotor_property_column_id' => rand(1,5),
            'price' => rand(1,8),
            'code' => rand(1,8),
            'text' => $this->faker->name()
        ];
    }
}
