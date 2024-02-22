'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Hero from '@/components/Hero'
// import Carousel from '@/components/Carousel'
import Showcase from '@/components/Showcase'
import Features from '@/components/Features'
import Solutions from '@/components/Solutions'
import Roadmap from '@/components/Roadmap'
// import Scrollbar from 'smooth-scrollbar'
import ResizeObserver from 'resize-observer-polyfill'
import { useScroll, useTransform, useSpring, motion } from 'framer-motion'

export default function Home() {
  const scrollRef = useRef(null)
  const [scrollableHeight, setScrollableHeight] = useState(0)

  const resizeScrollableHeight = useCallback(entries => {
    for (let entry of entries) {
      setScrollableHeight(entry.contentRect.height)
    }
  }, [])

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries =>
      resizeScrollableHeight(entries)
    )
    scrollRef.current && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  const { scrollY } = useScroll()

  const negativeScrollY = useTransform(
    scrollY,
    [0, scrollableHeight],
    [0, -scrollableHeight]
  )

  const springPhysics = {
    damping: 22,
    mass: 0.1,
    stiffness: 200,
    bounce: 0.5,
    duration: 0.4,
    velocity: 100
  }

  const springNegativeScrollY = useSpring(negativeScrollY, springPhysics)

  // useEffect(() => {
  //   const target = document.body
  //   const options = {
  //     damping: 0.07
  //   }

  //   Scrollbar.init(target, options)

  //   return () => {
  //     if (Scrollbar) Scrollbar.destroy(target)
  //   }
  // }, [])

  return (
    <>
      {/* <motion.div
        ref={scrollRef}
        style={{ y: springNegativeScrollY }}
        className='scroll-container'
      > */}
        <main
          className='flex justify-center min-h-screen min-w-screen'
          id='main'
        >
          <div className='w-full'>
            <Hero />
            {/* <Carousel /> */}
            <Showcase />
            <Features />
            <Solutions />
            <Roadmap />
          </div>
        </main>
      {/* </motion.div> */}

      <div style={{ height: scrollableHeight }} />
    </>
  )
}
