<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Space extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'type', // locker o room
        'subtype', // Standard, Large, XXXL, Gym Rat, etc.
        'availability_status', // available, occupied
        'is_dirty', //dirty
        'is_out_of_service', // out_of_service
    ];

    public function rentals()
    {
        //return $this->hasMany(SpaceRental::class);
    }
}