# TaskFlow - Modern Task Management App

A modern, full-stack task management application built as a portfolio project for software engineering independence. This project demonstrates proficiency in modern web development technologies and best practices.

## 🌟 Features

- **User Authentication**: Secure registration, login, and logout
- **Task Management**: Full CRUD operations for tasks
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Real-time Updates**: Live task synchronization
- **Modern UI/UX**: Clean, intuitive interface

## 🚀 Tech Stack

### Backend
- **Laravel 12** + **PHP 8.4**
- **Laravel Sanctum** (API Authentication)
- **SQLite** (Development) / **MySQL** (Production)
- **Laravel Sail** (Docker Environment)

### Frontend
- **React 18** + **TypeScript**
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling)
- **React Query** (Data Fetching)
- **React Hook Form** (Form Management)

## 📁 Project Structure

```
task-management-app/
├── backend/          # Laravel API Server
├── frontend/         # React SPA Client
└── README.md
```

## 🛠️ Development Setup

### Prerequisites
- PHP 8.4+
- Composer
- Node.js 18+
- npm or yarn

### Backend Setup (Laravel)

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

The API will be available at `http://localhost:8000`

### Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📋 MVP Roadmap

- [x] Project Initial Setup
- [x] Git Repository Configuration
- [ ] User Authentication (Register/Login/Logout)
- [ ] Task CRUD Operations
- [ ] Basic UI Implementation
- [ ] Responsive Design
- [ ] API Integration
- [ ] Basic Deployment

## 🔮 Future Enhancements

- **Project Management**: Organize tasks into projects
- **Team Collaboration**: Multi-user support and task assignment
- **Advanced Features**: Due dates, priorities, categories
- **Real-time Collaboration**: Live updates and notifications
- **Mobile App**: React Native or PWA
- **Analytics Dashboard**: Productivity insights
- **File Attachments**: Support for task-related files
- **Internationalization**: Multi-language support (Japanese, English)

## 🌍 Internationalization

This project is designed with internationalization in mind:
- **Primary Language**: English (for global audience)
- **Secondary Language**: Japanese (planned)
- **i18n Framework**: React-i18next (frontend), Laravel Localization (backend)

## 🎯 Development Timeline

**Target**: MVP completion in 1 week
- **Day 1-2**: Authentication & API setup
- **Day 3-4**: Task management & CRUD
- **Day 5-6**: Frontend UI & integration
- **Day 7**: Testing & deployment

## 🚀 Deployment

### Development
- Backend: Laravel Sail (Docker)
- Frontend: Vite dev server

### Production (Planned)
- Backend: Railway/Heroku
- Frontend: Vercel/Netlify
- Database: PlanetScale/MySQL

## 📄 License

MIT License - feel free to use this project for learning and portfolio purposes.

## 🤝 Contributing

This is a portfolio project, but suggestions and improvements are welcome!

---

**Built with ❤️ for the global developer community**
