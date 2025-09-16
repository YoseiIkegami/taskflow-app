<?php

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

// Health check endpoint for Railway
Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => date('Y-m-d H:i:s'),
        'service' => 'TaskFlow API'
    ]);
});

// Simple test endpoint
Route::get('/test', function () {
    return response()->json([
        'message' => 'API is working!',
        'timestamp' => date('Y-m-d H:i:s')
    ]);
});

// Simple tasks API (for demo)
Route::get('/tasks', function () {
    return response()->json([
        [
            'id' => 1,
            'title' => 'サンプルタスク1',
            'description' => 'これはサンプルタスクです',
            'completed' => false,
            'created_at' => date('Y-m-d H:i:s')
        ],
        [
            'id' => 2,
            'title' => 'サンプルタスク2',
            'description' => 'これもサンプルタスクです',
            'completed' => true,
            'created_at' => date('Y-m-d H:i:s')
        ]
    ]);
});

Route::post('/tasks', function (Request $request) {
    $task = [
        'id' => rand(1000, 9999),
        'title' => $request->input('title', '新しいタスク'),
        'description' => $request->input('description', ''),
        'completed' => false,
        'created_at' => date('Y-m-d H:i:s')
    ];
    return response()->json($task, 201);
});

// API version
Route::get('/version', function () {
    return response()->json([
        'version' => '1.0.0',
        'name' => 'TaskFlow API'
    ]);
});
