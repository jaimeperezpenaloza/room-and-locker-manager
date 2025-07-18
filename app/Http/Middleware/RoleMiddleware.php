<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    public function handle($request, Closure $next, string ...$roles)
    {
        $user = $request->user();
    
        if (!$user || !in_array($user->role, $roles)) {
            abort(403, 'Unauthorized');
        }
    
        return $next($request);
    }
}