<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// OPTIONSリクエストの処理
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ルーティング
$request_uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

// パスを解析
$path = parse_url($request_uri, PHP_URL_PATH);
$path = str_replace('/api', '', $path);

// タスクのデータ（メモリベース）
$tasks = [];

// ルート処理
switch ($path) {
    case '/tasks':
        if ($method === 'GET') {
            echo json_encode($tasks);
        } elseif ($method === 'POST') {
            $input = json_decode(file_get_contents('php://input'), true);
            $task = [
                'id' => uniqid(),
                'title' => $input['title'] ?? '',
                'description' => $input['description'] ?? '',
                'completed' => false,
                'created_at' => date('c')
            ];
            $tasks[] = $task;
            http_response_code(201);
            echo json_encode($task);
        }
        break;
        
    case '/health':
        echo json_encode([
            'status' => 'ok',
            'timestamp' => date('c'),
            'service' => 'TaskFlow API'
        ]);
        break;
        
    case '/test':
        echo json_encode([
            'message' => 'API is working!',
            'timestamp' => date('c')
        ]);
        break;
        
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Not found']);
        break;
}
?>
