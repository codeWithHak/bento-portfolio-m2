import React from 'react'

export default function RetroGridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e6d9 1px, transparent 1px),
            linear-gradient(to bottom, #e5e6d9 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundColor: '#f7f8eb',
        }}
      />
    </div>
  )
}