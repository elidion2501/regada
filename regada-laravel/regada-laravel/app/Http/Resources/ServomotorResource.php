<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServomotorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' =>  $this->id,
            'name' =>  $this->name,
            'type_number' =>  $this->type_number,
            'max_load_torque' => $this->max_load_torque, 
            'adjustment_time' => $this->adjustment_time, 
            'working_angle_from' => $this->working_angle_from, 
            'working_angle_to' => $this->working_angle_to, 
            'temperature_from' => $this->temperature_from, 
            'temperature_to' => $this->temperature_to, 
            'coverage_to' => $this->coverage_to, 
            'coverage_from' => $this->coverage_from, 
            'working_position' => $this->working_position, 
            'weight_from' => $this->weight_from, 
            'weight_to' => $this->weight_to, 
            'img_path' => $this->img_path, 
        ];
    }
}
