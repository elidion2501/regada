<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServomotorPropertyColumn extends Model
{
    use HasFactory;

    public function servomotorProperties(){
        return $this->hasMany(ServomotorProperty::class, 'servomotor_property_column_id');
    }
}
