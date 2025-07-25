<?php

namespace App\Http\Controllers;

use App\Models\Space;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RentalStatusController extends Controller
{
    public function index()
    {
        $spaces = Space::orderBy('number')->get();
        $user = Auth::user();

        return Inertia::render('RentalStatus/Index', [
            'spaces' => $spaces,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'role' => $user->role,
            ],
        ]);
    }
}