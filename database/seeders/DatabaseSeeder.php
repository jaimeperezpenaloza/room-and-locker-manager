<?php

namespace Database\Seeders;
use Database\Seeders\SpaceSeeder;

use Illuminate\Database\Seeder;
use App\Models\User;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // No afecta nada más si solo agregas esta línea:
        $this->call([
            SpaceSeeder::class,
        ]);

        // Puedes dejar esto si quieres conservar ese usuario de prueba:
        /*User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);*/
    }
}
