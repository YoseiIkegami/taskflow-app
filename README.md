# TaskFlow - Task Management App

A modern, full-stack task management application built as a portfolio project for software engineering independence. This project demonstrates proficiency in modern web development technologies and best practices.

<img width="1436" height="962" alt="image" src="https://github.com/user-attachments/assets/683f5f42-d5e2-493c-8d3b-2d41f286434b" />


## 🌟 Features

- **Task Management**: Full CRUD operations for tasks (Create, Read, Update, Delete)
- **Task Completion**: Toggle task completion status with visual feedback
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI/UX**: Modern, intuitive interface with smooth animations
- **Real-time Updates**: Instant task synchronization across the interface
- **Demo Mode**: No authentication required for easy testing and demonstration

## 🚀 Tech Stack

### Backend
- **Laravel 12** + **PHP 8.4**
- **Laravel Sanctum** (API Authentication)
- **SQLite** (Development) / **MySQL** (Production)
- **Laravel Sail** (Docker Environment)

### Frontend
- **React 18** + **JavaScript**
- **Vite** (Build Tool & Dev Server)
- **Custom CSS** (Clean, modern styling)
- **Axios** (HTTP Client for API calls)
- **React Router** (Client-side routing)

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
php artisan db:seed  # Optional: Seed sample data
php artisan serve
```

The API will be available at `http://localhost:8000`

**API Endpoints:**
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PATCH /api/tasks/{id}/toggle` - Toggle task completion
- `DELETE /api/tasks/{id}` - Delete a task
- `GET /api/health` - Health check

### Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Running Both Services

1. Start the backend server:
```bash
cd backend && php artisan serve
```

2. Start the frontend server (in a new terminal):
```bash
cd frontend && npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 📋 MVP Roadmap

- [x] Project Initial Setup
- [x] Git Repository Configuration
- [x] Backend API Development (Laravel)
- [x] Frontend Development (React)
- [x] Task CRUD Operations
- [x] Clean UI Implementation
- [x] Responsive Design
- [x] API Integration
- [x] CORS Configuration
- [x] Demo Mode (No Authentication)
- [x] Basic Deployment (GitHub Pages)

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

**Status**: MVP Completed ✅
- **Phase 1**: Backend API development with Laravel
- **Phase 2**: Frontend development with React
- **Phase 3**: Task management CRUD operations
- **Phase 4**: Clean UI/UX implementation
- **Phase 5**: CORS configuration and API integration
- **Phase 6**: Demo mode implementation (no authentication required)
- **Phase 7**: GitHub Pages deployment with GitHub Actions

## 🚀 Deployment

### Development
- Backend: Laravel development server (`php artisan serve`)
- Frontend: Vite dev server (`npm run dev`)
- Database: SQLite (local development)

### Production
- **Frontend**: GitHub Pages (Live) - https://yoseiikegami.github.io/taskflow-app/
- **Backend**: Railway/Heroku (Planned)
- **Database**: PlanetScale/MySQL (Planned)

### Demo Access
The application is currently running in demo mode with sample data. No authentication is required to test the features.

**🌐 Live Application**: [https://yoseiikegami.github.io/taskflow-app/](https://yoseiikegami.github.io/taskflow-app/)

**📱 Features Available in Demo**:
- ✅ Create new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Responsive design (works on mobile and desktop)
- ✅ Real-time UI updates

## 🔧 Deployment Details

### GitHub Pages Deployment
- **Automated Deployment**: GitHub Actions workflow triggers on every push to `main` branch
- **Build Process**: Vite builds the React app with production optimizations
- **Static Hosting**: Frontend served from GitHub Pages with proper asset paths
- **Custom Domain Ready**: Configured for potential custom domain setup

### CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
- Build React application with Vite
- Add .nojekyll file for proper static hosting
- Deploy to gh-pages branch using peaceiris/actions-gh-pages
- Automatic updates on code changes
```

## 📄 License

MIT License - feel free to use this project for learning and portfolio purposes.

## 🎨 UI/UX Features

- **Clean Design**: Modern, minimalist interface inspired by clean design principles
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth hover effects and transitions
- **Visual Feedback**: Clear completion status indicators
- **Intuitive Navigation**: Easy-to-use task management interface
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🧪 Testing

The application includes:
- Sample data for immediate testing
- CORS configuration for cross-origin requests
- Error handling for API failures
- Responsive design testing across devices

## 🤝 Contributing

This is a portfolio project, but suggestions and improvements are welcome!

## 📸 Screenshots

<img width="1436" height="962" alt="image" src="https://github.com/user-attachments/assets/3e5bdd7b-9646-4b75-aa43-372e27f6a3a8" />

<img width="1437" height="961" alt="image" src="https://github.com/user-attachments/assets/c8305041-5ba7-4668-9d3e-763092f08d2a" />




---

**Built with ❤️ for the global developer community**

**Live Demo**: [https://yoseiikegami.github.io/taskflow-app/](https://yoseiikegami.github.io/taskflow-app/) 🚀
