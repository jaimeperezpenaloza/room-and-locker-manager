<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('gym_rat_passes', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Ej: "12 Pack"
            $table->integer('total_uses');
            $table->decimal('price', 8, 2);
            $table->integer('duration_minutes')->default(120);
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('gym_rat_passes');
    }
};
