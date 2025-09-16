# TaskFlow - タスク管理アプリ



このプロジェクトはタスク管理アプリケーションです。
開発力の習熟度を確認するために、個人的に作成しました。

<img width="1917" height="959" alt="image" src="https://github.com/user-attachments/assets/21207543-4263-4bb1-baea-1f6c84ef2154" />


---

## 🌟 特徴

- **タスク管理**: CRUD操作、完了ステータス切り替え
- **UI/UX**: クリーンなデザイン、レスポンシブ対応
- **リアルタイム更新**: タスクの即時同期
- **デモモード**: 認証不要で試用可能

---

## 🚀 技術スタック

- **バックエンド**: Laravel 12 + PHP 8.4, Laravel Sanctum, SQLite/MySQL
- **フロントエンド**: React 18 + JavaScript, Vite, Custom CSS, Axios

---

## 🛠️ セットアップ

### バックエンド (Laravel)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed # サンプルデータ
php artisan serve
```

フロントエンド (React)

```
cd frontend
npm install
npm run dev
```

### 実行
両方のサーバーを起動し、ブラウザで http://localhost:5173 にアクセス。

## 🚀 デプロイ
ライブデモ: https://yoseiikegami.github.io/taskflow-app/

フロントエンド: GitHub Pagesに自動デプロイ

バックエンド: Railway/Heroku にデプロイ予定

## 🔮 今後の予定
プロジェクト管理、チームコラボレーション機能の追加

期限、優先度などの高度な機能

モバイルアプリ、分析ダッシュボード、多言語対応

## 📄 ライセンス
MITライセンス

Live Demo: https://yoseiikegami.github.io/taskflow-app/
