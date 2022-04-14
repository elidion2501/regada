<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServomotorsPropertyColumnsResource extends JsonResource
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
            'servomotor_id' =>  $this->servomotor_id,
            'row_id' =>  $this->row_id,
            'column_id' =>  $this->column_id,
            'name' =>  $this->name,
        ];
    }
}
