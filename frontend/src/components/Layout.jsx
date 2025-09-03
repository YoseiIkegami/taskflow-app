import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()

  const navigation = [
    { name: 'ダッシュボード', href: '/dashboard', icon: '🏠' },
    { name: 'タスク', href: '/tasks', icon: '📋' },
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ナビゲーションバー - クリーンなデザイン */}
      <nav className="nav">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: '#007aff', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>T</span>
                </div>
                <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#1d1d1f' }}>
                  TaskFlow
                </h1>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginLeft: '32px' }}>
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      <span style={{ marginRight: '8px' }}>{item.icon}</span>
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                backgroundColor: '#f2f2f7', 
                borderRadius: '8px', 
                padding: '8px 12px' 
              }}>
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  backgroundColor: '#d1d1d6', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <span style={{ color: '#6e6e73', fontSize: '12px', fontWeight: '500' }}>U</span>
                </div>
                <span style={{ color: '#1d1d1f', fontSize: '14px', fontWeight: '500' }}>
                  ユーザーさん
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* メインコンテンツ */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
