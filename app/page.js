'use client'

import {
  // useRef,
  useState,
  // useCallback,
  useEffect
} from 'react'
import Hero from '@/components/Hero'
// import Carousel from '@/components/Carousel'
import Blockchain from '@/components/Blockchain'
import Features from '@/components/Features'
import Solutions from '@/components/Solutions'
import Roadmap from '@/components/Roadmap'
// import Scrollbar from 'smooth-scrollbar'
// import ResizeObserver from 'resize-observer-polyfill'
// import {
//   useScroll,
//   useTransform,
//   useSpring,
//   motion
// } from 'framer-motion'

export default function Home() {
  // const scrollRef = useRef(null)
  // const [scrollableHeight, setScrollableHeight] = useState(0)

  // const resizeScrollableHeight = useCallback(entries => {
  //   for (let entry of entries) {
  //     setScrollableHeight(entry.contentRect.height)
  //   }
  // }, [])

  // useEffect(() => {
  //   const resizeObserver = new ResizeObserver(entries =>
  //     resizeScrollableHeight(entries)
  //   )
  //   scrollRef.current && resizeObserver.observe(scrollRef.current)
  //   return () => resizeObserver.disconnect()
  // }, [])

  // const { scrollY } = useScroll()

  // const negativeScrollY = useTransform(
  //   scrollY,
  //   [0, scrollableHeight],
  //   [0, -scrollableHeight]
  // )

  // const springPhysics = {
  //   damping: 22,
  //   mass: 0.1,
  //   stiffness: 200,
  //   bounce: 0.5,
  //   duration: 0.4,
  //   velocity: 100
  // }

  // const springNegativeScrollY = useSpring(negativeScrollY, springPhysics)

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

  const [isVisible, setIsVisible] = useState(false)

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Show or hide the button based on the scroll position
  const handleScroll = () => {
    const scrollTop = window.pageYOffset

    // Show the button when the user scrolls down
    setIsVisible(scrollTop > 100)
  }

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* <motion.div
        ref={scrollRef}
        style={{ y: springNegativeScrollY }}
        className='scroll-container'
      > */}
      <main className='flex justify-center min-h-screen min-w-screen' id='main'>
        <div className='w-full'>
          <Hero />
          {/* <Carousel /> */}
          <Blockchain />
          <Features />
          <Solutions />
          <Roadmap />
        </div>
        <button
          className={`btn btn-contained fixed right-10 bottom-10 px-3 font-semibold z-50 ${
            !isVisible ? 'hidden' : ''
          }`}
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      </main>
      {/* </motion.div> */}

      {/* <div style={{ height: scrollableHeight }} /> */}
    </>
  )
}
