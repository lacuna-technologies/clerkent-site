import React from 'react'

const Container = ({ children, className = `` }) => {
  return (
    <div className={`max-w-screen-lg w-full p-4 ${className}`}>
      {children}
    </div>
  )
}

export default Container