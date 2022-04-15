<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServomotorProperty extends Model
{
    use HasFactory;

    public function servomotorPropertyColumn(){
        return $this->belongsTo(ServomotorPropertyColumn::class, 'servomotor_property_column_id');
    }
}
