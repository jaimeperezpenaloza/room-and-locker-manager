<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('spaces', function (Blueprint $table) {
            $table->id();
            $table->integer('number')->unique();
            $table->enum('type', ['room', 'locker']);
            $table->enum('subtype', ['standard', 'large', 'xlarge', 'xtreme', 'porn_star', 'regular', 'large_locker', 'gym_rat', 'employee']);
            $table->enum('availability_status', ['available', 'occupied'])->default('available');
            $table->boolean('is_dirty')->default(false);
            $table->boolean('is_out_of_service')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('spaces');
    }
};

