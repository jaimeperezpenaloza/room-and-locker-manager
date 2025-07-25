<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Space;

class SpaceSeeder extends Seeder
{
    public function run(): void
    {
        // Habitaciones
        foreach ([118, 206, 306] as $number) {
            Space::create([
                'number' => $number,
                'type' => 'room',
                'subtype' => 'standard',
                'availability_status' => 'occupied',
                'is_dirty' => false,
                'is_out_of_service' => false,
            ]);
        }

        // Lockers disponibles
        foreach ([601, 602, 603] as $number) {
            Space::create([
                'number' => $number,
                'type' => 'locker',
                'subtype' => 'regular',
                'availability_status' => 'available',
                'is_dirty' => true,
                'is_out_of_service' => false,
            ]);
        }

        // Lockers de empleados fuera de servicio
        foreach ([400, 423, 425, 427, 429, 431] as $number) {
            Space::create([
                'number' => $number,
                'type' => 'locker',
                'subtype' => 'employee',
                'availability_status' => 'available',
                'is_dirty' => false,
                'is_out_of_service' => true,
            ]);
        }

        // Sala cerrada y sucia
        Space::create([
            'number' => 352,
            'type' => 'room',
            'subtype' => 'porn_star',
            'availability_status' => 'occupied',
            'is_dirty' => true,
            'is_out_of_service' => true,
        ]);
    }
}