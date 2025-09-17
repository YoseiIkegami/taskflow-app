import api from './api'

export const taskService = {
  // タスク一覧を取得
  async getTasks() {
    const response = await api.get('/tasks')
    return response.data
  },

  // タスクを作成
  async createTask(taskData) {
    console.log('Creating task with data:', taskData)
    console.log('API base URL:', api.defaults.baseURL)
    const response = await api.post('/tasks', taskData)
    console.log('Task created successfully:', response.data)
    return response.data
  },

  // タスクの完了状態を切り替え
  async toggleTask(id) {
    const response = await api.patch(`/tasks/${id}/toggle`)
    return response.data
  },

  // タスクを削除
  async deleteTask(id) {
    await api.delete(`/tasks/${id}`)
  }
}
