import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Card, Button } from '../components/ui'

const Dashboard = () => {
  return (
    <div>
      {/* ウェルカムセクション */}
      <div className="card" style={{ marginBottom: '32px', padding: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            backgroundColor: '#007aff', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <span style={{ fontSize: '32px' }}>👋</span>
          </div>
          <div>
            <h1 className="title">こんにちは！</h1>
            <p className="text" style={{ fontSize: '18px', marginTop: '8px' }}>
              今日もお疲れ様です。タスクを効率的に管理しましょう。
            </p>
          </div>
        </div>
      </div>

      {/* クイックアクション */}
      <div className="grid">
        {/* メインアクション */}
        <div className="card" style={{ textAlign: 'center', padding: '32px' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            backgroundColor: '#007aff', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 16px' 
          }}>
            <span style={{ fontSize: '32px' }}>📋</span>
          </div>
          <h3 className="subtitle" style={{ marginBottom: '12px' }}>
            タスク管理
          </h3>
          <p className="text" style={{ marginBottom: '24px' }}>
            タスクを作成、管理、完了させましょう
          </p>
          <Link to="/tasks">
            <button className="button-primary" style={{ width: '100%' }}>
              <span style={{ marginRight: '8px' }}>🚀</span>
              タスクを見る
            </button>
          </Link>
        </div>

        {/* 進捗確認 */}
        <div className="card" style={{ textAlign: 'center', padding: '32px' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            backgroundColor: '#ff9500', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 16px' 
          }}>
            <span style={{ fontSize: '32px' }}>📊</span>
          </div>
          <h3 className="subtitle" style={{ marginBottom: '12px' }}>
            進捗確認
          </h3>
          <p className="text" style={{ marginBottom: '24px' }}>
            あなたのタスクの進捗を確認できます
          </p>
          <button className="button-secondary" style={{ width: '100%' }} disabled>
            <span style={{ marginRight: '8px' }}>🔒</span>
            近日公開
          </button>
        </div>

        {/* 設定 */}
        <div className="card" style={{ textAlign: 'center', padding: '32px' }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            backgroundColor: '#8e8e93', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 16px' 
          }}>
            <span style={{ fontSize: '32px' }}>⚙️</span>
          </div>
          <h3 className="subtitle" style={{ marginBottom: '12px' }}>
            設定
          </h3>
          <p className="text" style={{ marginBottom: '24px' }}>
            アカウント設定や通知設定を行えます
          </p>
          <button className="button-secondary" style={{ width: '100%' }} disabled>
            <span style={{ marginRight: '8px' }}>🔒</span>
            近日公開
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
