<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ServomotorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'working_position' => $this->faker->name(),
            'img_path' => 'https://www.regada.sk/public/media/image/picture/13_bd65c7f7f726cc31702ab1b627f62fd1.jpeg',
            'type_number' =>rand(0,999),
            'max_load_torque' =>rand(0,999),
            'adjustment_time' =>rand(0,999),
            'working_angle_from' =>rand(0,999),
            'working_angle_to' =>rand(0,999),
            'temperature_from' =>rand(0,999),
            'temperature_to' =>rand(0,999),
            'coverage' =>rand(0,999),
            'weight_from' =>rand(0,999),
            'weight_to' =>rand(0,999),
        ];
    }
}
