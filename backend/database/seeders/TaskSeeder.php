<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create demo user
        $user = User::create([
            'name' => 'Demo User',
            'email' => 'demo@taskflow.com',
            'password' => bcrypt('password123'),
        ]);

        // Create Japanese demo user
        $japaneseUser = User::create([
            'name' => 'テストユーザー',
            'email' => 'test@example.com',
            'password' => bcrypt('test123'),
        ]);

        // Create sample tasks
        $tasks = [
            [
                'title' => 'Welcome to TaskFlow!',
                'description' => 'This is your first task. You can edit, complete, or delete it.',
                'completed' => false,
            ],
            [
                'title' => 'Explore the Dashboard',
                'description' => 'Check out the dashboard to see your task statistics.',
                'completed' => false,
            ],
            [
                'title' => 'Create Your First Project',
                'description' => 'Try creating a new task to get started with TaskFlow.',
                'completed' => true,
            ],
            [
                'title' => 'Set Up Your Profile',
                'description' => 'Update your profile information and preferences.',
                'completed' => false,
            ],
            [
                'title' => 'Invite Team Members',
                'description' => 'Share TaskFlow with your team for better collaboration.',
                'completed' => false,
            ],
        ];

        foreach ($tasks as $taskData) {
            Task::create([
                'title' => $taskData['title'],
                'description' => $taskData['description'],
                'completed' => $taskData['completed'],
                'user_id' => $user->id,
            ]);
        }

        // Create Japanese sample tasks
        $japaneseTasks = [
            [
                'title' => 'TaskFlowへようこそ！',
                'description' => 'これがあなたの最初のタスクです。編集、完了、削除ができます。',
                'completed' => false,
            ],
            [
                'title' => 'ダッシュボードを探索',
                'description' => 'ダッシュボードでタスクの統計を確認してみましょう。',
                'completed' => false,
            ],
            [
                'title' => '最初のプロジェクトを作成',
                'description' => 'TaskFlowを始めるために新しいタスクを作成してみてください。',
                'completed' => true,
            ],
            [
                'title' => 'プロフィールを設定',
                'description' => 'プロフィール情報と設定を更新しましょう。',
                'completed' => false,
            ],
        ];

        foreach ($japaneseTasks as $taskData) {
            Task::create([
                'title' => $taskData['title'],
                'description' => $taskData['description'],
                'completed' => $taskData['completed'],
                'user_id' => $japaneseUser->id,
            ]);
        }
    }
}