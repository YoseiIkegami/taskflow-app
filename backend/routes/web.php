<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'message' => 'TaskFlow API',
        'version' => '1.0.0',
        'status' => 'running',
        'endpoints' => [
            'GET /api/tasks' => 'Get all tasks',
            'POST /api/tasks' => 'Create a new task',
            'GET /api/tasks/{id}' => 'Get a specific task',
            'PUT /api/tasks/{id}' => 'Update a task',
            'DELETE /api/tasks/{id}' => 'Delete a task',
            'PATCH /api/tasks/{id}/toggle' => 'Toggle task completion',
            'GET /api/health' => 'Health check'
        ]
    ]);
});
