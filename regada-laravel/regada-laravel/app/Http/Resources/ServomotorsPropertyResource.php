<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServomotorsPropertyResource extends JsonResource
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
            'servomotor_property_column_id' =>  $this->servomotor_id,
            'row_id' =>  $this->row_id,
            'text' =>  $this->text,
            'price' =>  $this->price,
            'code' =>  $this->code,
        ];
    }
}
