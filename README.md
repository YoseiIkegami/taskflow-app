# TaskFlow - タスク管理アプリ

![TaskFlow Screenshot](https://github.com/user-attachments/assets/21207543-4263-4bb1-baea-1f6c84ef2154)

このプロジェクトは、モダンなUI/UXを備えたタスク管理アプリケーションです。
デザインと直感的な操作性を重視してWebアプリケーションの学習目的で開発しました。

## 🚀 技術スタック

### フロントエンド
- **React 18** + **Vite** - 高速な開発環境
- **純粋なCSS** - モダンなデザインシステム
- **Axios** - API通信
- **React Router** - ページルーティング

### バックエンド
- **Laravel 11** + **PHP 8.3**
- **SQLite**
- **Laravel Sanctum** - 認証システム

### デプロイ
- **フロントエンド**: GitHub Pages
- **バックエンド**: Railway

## 🛠️ セットアップ

### 前提条件
- Node.js 18+
- PHP 8.3+
- Composer

### バックエンド (Laravel)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### フロントエンド (React)
```bash
cd frontend
npm install
npm run dev
```

### 実行
両方のサーバーを起動し、ブラウザで http://localhost:5173 にアクセス。

## 🌐 ライブデモ

**Live Demo**: https://yoseiikegami.github.io/dashboard


## 📱 使用方法

1. **タスクの作成**: 「タスクを追加」ボタンをクリック
2. **タスクの編集**: タスクをクリックして編集
3. **完了切り替え**: チェックボックスをクリック
4. **タスクの削除**: 削除ボタンをクリック

## 🔮 今後の予定

- **📊 プロジェクト管理**: 複数プロジェクト対応
- **👥 チーム機能**: コラボレーション機能
- **⏰ 期限管理**: デッドライン設定
- **📈 分析ダッシュボード**: 生産性分析
- **🌍 多言語対応**: 国際化対応

## 📄 ライセンス

MITライセンス

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します！

---
