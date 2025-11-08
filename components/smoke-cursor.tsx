'use client'

import { useEffect, useState } from 'react'

export default function SmokeCursor() {
     const [isClient, setIsClient] = useState(false)
  const [isFinePointer, setIsFinePointer] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let animationFrameId: number
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const updatePosition = () => {
      setPosition(prev => ({
        x: prev.x + (targetX - prev.x) * 0.2, // Smooth interpolation
        y: prev.y + (targetY - prev.y) * 0.2
      }))
      animationFrameId = requestAnimationFrame(updatePosition)
    }

    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMouseMove)
      updatePosition() // Start the animation loop
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  
  useEffect(() => {
    // Only run on client
    setIsClient(true)

    if (typeof window !== 'undefined') {
      const fine = window.matchMedia('(pointer: fine)').matches
      setIsFinePointer(fine)
    }
  }, [])

  // SSR safety: return nothing until client-side render
  if (!isClient || !isFinePointer) return null
  

  if (!window.matchMedia('(pointer: fine)').matches) return null

  return (
    <div
      className="pointer-events-none fixed z-30 transition-transform duration-100 ease-out"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-64 h-64 bg-white/20 rounded-full blur-2xl"></div>
    </div>
  )
}