<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Servomotor extends Model
{
    use HasFactory;
    public function allowedCodes()
    {
        return $this->HasMany(AllowedCode::class, 'servomotor_id');
    }
}
