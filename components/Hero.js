'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Lottie from 'lottie-react'
import heroBgAnimation from '../public/lotties/data.json'
import { useInView } from 'react-intersection-observer'
import FadeIn from './FadeIn'

export const CtaButtons = () => (
  <div className='flex justify-center lg:justify-start gap-5 mt-12'>
    <button className='btn-contained'>Book a Demo</button>
    <button className='btn-outline'>Discover More</button>
  </div>
)

export default function Hero() {
  const animationRef = useRef()
  const [ref, inView] = useInView({ triggerOnce: false })

  useEffect(() => {
    if (inView) {
      animationRef.current?.goToAndPlay(0)
    }
  }, [inView])

  return (
    <section className='w-full overflow-hidden'>
      <div
        className='relative flex items-center justify-center lg:justify-between min-h-screen lg:px-36 lg:pt-48 container mx-auto'
        ref={ref}
      >
        <Lottie
          animationData={heroBgAnimation}
          loop={false}
          className='hero-lottie'
          lottieRef={animationRef}
        />
        <Image
          className='hidden lg:block absolute left-1/2 transform -translate-x-1/2 bottom-0 max-w-full max-h-full'
          //   className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src='/images/hero-image.svg'
          alt='Hero Image'
          width={739}
          height={800}
          priority
        />
        <FadeIn>
          <div className='z-10'>
            <h1 className='capitalize text-5xl sm:text-7xl text-center lg:text-left font-semibold'>
              Step into
              <br /> the future
              <br /> of ID
              <br /> verification
            </h1>
            <CtaButtons />
          </div>
        </FadeIn>
        <FadeIn>
          <div className='z-10 text-lg hidden lg:block'>
            Unlock a secure advantage with our
            <br /> cutting-edge KYC solutions and
            <br /> a comprehensive suite of tools to verify
            <br /> and authenticate customer identities.
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
