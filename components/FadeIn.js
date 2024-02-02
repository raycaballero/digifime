'use client'

import React from 'react'
import { useInView } from 'react-intersection-observer'

const FadeIn = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false
  })

  return (
    <div ref={ref} className={`fade-in ${inView ? 'animate' : ''}`}>
      {children}
    </div>
  )
}

export default FadeIn
