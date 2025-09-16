<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Health check endpoint for Railway
Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now(),
        'service' => 'TaskFlow API'
    ]);
});

// Simple test endpoint
Route::get('/test', function () {
    return response()->json([
        'message' => 'API is working!',
        'timestamp' => now()
    ]);
});


// API version
Route::get('/version', function () {
    return response()->json([
        'version' => '1.0.0',
        'name' => 'TaskFlow API'
    ]);
});

// Simple task routes (no authentication required for demo)
Route::get('/tasks', function () {
    return response()->json([]);
});

Route::post('/tasks', function () {
    $task = [
        'id' => uniqid(),
        'title' => request('title'),
        'description' => request('description'),
        'completed' => false,
        'created_at' => now()
    ];
    return response()->json($task, 201);
});

// Protected routes (for future use)
Route::middleware('auth:sanctum')->group(function () {
    // Auth routes
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});
