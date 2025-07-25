<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('gym_rat_pass_usages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('gym_rat_pass_id')->constrained();
            $table->string('code')->unique();
            $table->timestamp('used_at')->nullable();
            $table->foreignId('space_rental_id')->nullable()->constrained('space_rentals');

            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('gym_rat_pass_usages');
    }
};
