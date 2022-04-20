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
            'name' => 'Elektrický servopohon jednootáčkový SP 1',
            'working_position' => 'ľubovoľná',
            'img_path' => 'http://www.regada.sk/public/media/image/picture/13_d21b7204cc46e0499b6c2ec4e6536d5f.jpeg',
            'type_number' =>281,
            'max_load_torque' =>10 ,
            'adjustment_time' => 80,
            'working_angle_from' => 60,
            'working_angle_to' => 360,
            'temperature_from' => -60,
            'temperature_to' => 55,
            'coverage_from' => 67,
            'coverage_to' => 68,
            'weight_from' => 6.5,
            'weight_to' =>8.3,
        ];
    }
}
