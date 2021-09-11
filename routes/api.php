<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\FilesController;
use App\Http\Controllers\Api\ProjectsController;
use App\Http\Controllers\Api\TasksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::post('/authenticate', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('projects', ProjectsController::class);
    Route::apiResource('tasks', TasksController::class)->except(['index', 'show']);
    Route::post('/upload', [FilesController::class, 'store']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/logout', function (Request $request) {
    $user = $request->user();
    $user->tokens()->delete();
    Auth::guard('web')->logout();
    return ['status' => 'ok', 'message' => 'Logout Successful!'];
});
