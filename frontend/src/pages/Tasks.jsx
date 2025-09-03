import React, { useState, useEffect } from 'react'
import { taskService } from '../services/tasks'
import { Button, Input, Card } from '../components/ui'

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  })

  // タスク一覧を取得
  const fetchTasks = async () => {
    try {
      const data = await taskService.getTasks()
      setTasks(data)
    } catch (error) {
      console.error('タスクの取得に失敗しました:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  // フォーム送信
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await taskService.createTask(formData)
      setFormData({ title: '', description: '' })
      setShowForm(false)
      fetchTasks() // タスク一覧を再取得
    } catch (error) {
      console.error('タスクの作成に失敗しました:', error)
    }
  }

  // フォーム入力変更
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // タスクの完了状態を切り替え
  const handleToggle = async (id) => {
    try {
      await taskService.toggleTask(id)
      fetchTasks() // タスク一覧を再取得
    } catch (error) {
      console.error('タスクの更新に失敗しました:', error)
    }
  }

  // タスクを削除
  const handleDelete = async (id) => {
    if (window.confirm('このタスクを削除しますか？')) {
      try {
        await taskService.deleteTask(id)
        fetchTasks() // タスク一覧を再取得
      } catch (error) {
        console.error('タスクの削除に失敗しました:', error)
      }
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-64 space-y-4">
        <div className="relative">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200"></div>
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent absolute top-0 left-0"></div>
        </div>
        <p className="text-gray-600 text-sm">タスクを読み込み中...</p>
      </div>
    )
  }

  return (
    <div>
      {/* ヘッダーセクション */}
      <div className="card" style={{ marginBottom: '32px', padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#007aff', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <span style={{ fontSize: '24px' }}>📋</span>
              </div>
              <h1 className="title">タスク管理</h1>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '16px' }}>
              <p className="text" style={{ fontSize: '18px', fontWeight: '500' }}>
                {tasks.length} 個のタスク
              </p>
              
              {tasks.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    height: '8px', 
                    width: '120px', 
                    backgroundColor: '#e5e5ea', 
                    borderRadius: '4px', 
                    overflow: 'hidden' 
                  }}>
                    <div 
                      style={{ 
                        height: '100%', 
                        backgroundColor: '#007aff', 
                        borderRadius: '4px', 
                        transition: 'width 0.7s ease',
                        width: `${(tasks.filter(t => t.completed).length / tasks.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <span className="text" style={{ fontSize: '16px', fontWeight: '500' }}>
                    {Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)}% 完了
                  </span>
                </div>
              )}
            </div>
            
            {tasks.length > 0 && (
              <div style={{ display: 'flex', gap: '16px' }}>
                <div className="badge completed">
                  {tasks.filter(t => t.completed).length} 完了
                </div>
                <div className="badge pending">
                  {tasks.filter(t => !t.completed).length} 未完了
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className={showForm ? "button-cancel" : "button-primary"}
          >
            <span style={{ marginRight: '8px' }}>{showForm ? '✕' : '➕'}</span>
            {showForm ? 'キャンセル' : 'タスクを追加'}
          </button>
        </div>
      </div>

      {/* タスク作成フォーム */}
      {showForm && (
        <div className="form" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: '#007aff', 
              borderRadius: '10px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <span style={{ color: 'white', fontSize: '18px' }}>✨</span>
            </div>
            <div>
              <h3 className="subtitle">新しいタスク</h3>
              <p className="text">タスクの詳細を入力してください</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                タスクタイトル
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                placeholder="タスクのタイトルを入力"
                value={formData.title}
                onChange={handleChange}
                className="input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                タスクの詳細
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                className="input"
                style={{ resize: 'none' }}
                placeholder="タスクの詳細を入力（任意）"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="button-cancel"
              >
                <span style={{ marginRight: '8px' }}>✕</span>
                キャンセル
              </button>
              <button
                type="submit"
                className="button-primary"
              >
                <span style={{ marginRight: '8px' }}>🚀</span>
                タスクを作成
              </button>
            </div>
          </form>
        </div>
      )}

      {/* タスクリスト */}
      <div className="card">
        {tasks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 24px' }}>
            <div style={{ 
              width: '96px', 
              height: '96px', 
              backgroundColor: '#f2f2f7', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 24px' 
            }}>
              <span style={{ fontSize: '48px' }}>📝</span>
            </div>
            <h3 className="subtitle" style={{ marginBottom: '12px' }}>タスクがありません</h3>
            <p className="text" style={{ fontSize: '18px' }}>最初のタスクを作成してみましょう</p>
          </div>
        ) : (
          <div>
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`task-item ${task.completed ? 'completed' : ''}`} 
                style={{ 
                  marginBottom: '16px',
                  borderLeft: task.completed ? 'none' : '4px solid #007aff'
                }}
                onClick={() => handleToggle(task.id)}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  {/* チェックボックス */}
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggle(task.id)}
                    className="checkbox"
                    style={{ marginTop: '4px' }}
                    onClick={(e) => e.stopPropagation()}
                  />
                  
                  {/* タスク内容 */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 className={`subtitle ${task.completed ? 'task-title' : ''}`} style={{ 
                      marginBottom: '8px',
                      fontSize: '18px'
                    }}>
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className="text" style={{ 
                        fontSize: '14px',
                        marginBottom: '12px'
                      }}>
                        {task.description}
                      </p>
                    )}
                  </div>
                  
                  {/* アクション */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className={`badge ${task.completed ? 'completed' : 'pending'}`}>
                      {task.completed ? '✅ 完了' : '⏳ 未完了'}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(task.id);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#ff3b30',
                        cursor: 'pointer',
                        padding: '8px',
                        borderRadius: '8px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 59, 48, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      <span style={{ marginRight: '4px' }}>🗑️</span>
                      削除
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Tasks
