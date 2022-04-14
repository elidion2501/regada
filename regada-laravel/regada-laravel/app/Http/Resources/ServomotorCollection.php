<?php

namespace App\Http\Resources;

use App\Models\Servomotor;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ServomotorCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => ServomotorResource::collection($this->collection),
        ];
    }
}
