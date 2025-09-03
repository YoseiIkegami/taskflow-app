import React from 'react'

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  loading = false,
  className = '',
  ...props 
}) => {
  // フィッツの法則: 重要なボタンは大きく、指から近くに配置
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 backdrop-blur-sm'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white hover:from-indigo-600/90 hover:to-purple-600/90 focus:ring-indigo-400/50 shadow-xl hover:shadow-2xl border border-white/20',
    secondary: 'bg-white/30 text-gray-800 hover:bg-white/40 focus:ring-gray-400/50 border border-white/40 shadow-lg hover:shadow-xl',
    ghost: 'text-gray-700 hover:text-gray-900 hover:bg-white/20 focus:ring-gray-400/50 border border-transparent hover:border-white/30',
    danger: 'bg-gradient-to-r from-red-400/80 to-pink-400/80 text-white hover:from-red-500/90 hover:to-pink-500/90 focus:ring-red-400/50 shadow-xl hover:shadow-2xl border border-white/20',
    success: 'bg-gradient-to-r from-green-400/80 to-emerald-400/80 text-white hover:from-green-500/90 hover:to-emerald-500/90 focus:ring-green-400/50 shadow-xl hover:shadow-2xl border border-white/20'
  }
  
  // アフォーダンス: タップしやすいサイズを確保（最小44px）
  const sizeClasses = {
    sm: 'px-5 py-3 text-sm min-h-[44px]',
    md: 'px-6 py-4 text-base min-h-[48px]',
    lg: 'px-8 py-5 text-lg min-h-[56px]'
  }
  
  const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
