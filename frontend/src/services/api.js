import axios from 'axios'

const API_BASE_URL = import.meta.env.PROD 
  ? 'https://taskflow-app-production.up.railway.app/api'  // 本番環境用
  : 'http://localhost:8000/api'  // 開発環境用

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// リクエストインターセプター（認証なしのデモ版）
api.interceptors.request.use((config) => {
  // 認証なしのデモ版ではトークンは不要
  return config
})

// レスポンスインターセプターでエラーハンドリング
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 認証なしのデモ版では401エラーの処理は不要
    return Promise.reject(error)
  }
)

export default api
