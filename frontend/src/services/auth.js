import api from './api'

export const authService = {
  // ログイン
  async login(credentials) {
    const response = await api.post('/login', credentials)
    const { token, user } = response.data
    localStorage.setItem('token', token)
    return user
  },

  // ユーザー登録
  async register(userData) {
    const response = await api.post('/register', userData)
    const { token, user } = response.data
    localStorage.setItem('token', token)
    return user
  },

  // ログアウト
  async logout() {
    try {
      await api.post('/logout')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      localStorage.removeItem('token')
    }
  },

  // 現在のユーザー情報を取得
  async getCurrentUser() {
    const response = await api.get('/me')
    return response.data
  },

  // 認証状態をチェック
  isAuthenticated() {
    return !!localStorage.getItem('token')
  }
}
