<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('space_rentals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('space_id')->constrained('spaces');
            $table->foreignId('member_id')->nullable()->constrained('members');
            $table->timestamp('check_in_at');
            $table->timestamp('check_out_at')->nullable();
            $table->decimal('price_paid', 8, 2)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('space_rentals');
    }
};