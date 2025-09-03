import React from 'react'

const Card = ({ children, padding = 'default', className = '', ...props }) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  }
  
  const classes = `bg-white rounded-lg shadow-sm border border-gray-200 ${paddingClasses[padding]} ${className}`
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
