import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import './App.css'

function App() {
  return (
    <Routes>
      {/* 直接ダッシュボードにアクセス */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
      </Route>

      {/* フォールバック */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
