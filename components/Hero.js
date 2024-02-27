'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Lottie from 'lottie-react'
import heroBgAnimation from '../public/lotties/mainbanner.json'
import { useInView } from 'react-intersection-observer'
import FadeIn from './FadeIn'
// import '@lottiefiles/lottie-player'

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
    <section className='w-full overflow-hidden' id="home">
      <div
        className='relative flex flex-col space-y-24 lg:flex-row items-center justify-start lg:justify-between min-h-screen xl:px-36 pt-36 lg:pt-20 container mx-auto'
        ref={ref}
      >
        {/* <lottie-player
          autoplay
          src='/lotties/mainbanner.json'
          lottieRef={animationRef}
          style={{ width: '100vw', height: '101vh', position: 'absolute', top: -10, left: 0, zIndex: -1,}}
        ></lottie-player> */}
        <Lottie
          animationData={heroBgAnimation}
          className='hero-lottie'
          loop={false}
          lottieRef={animationRef}
        />
        <Image
          className='hero-image'
          //   className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src='/images/hero-image.png'
          alt='Hero Image'
          sizes='100vw'
          fill
          style={{
            backgroundPosition: 'center',
            objectFit: 'contain'
          }}
          priority
        />
        <FadeIn>
          <div className='z-10'>
            <h1 className='capitalize text-5xl sm:text-7xl text-center lg:text-left font-bold'>
              Verify Once,
              <br /> Be Verified
              <br /> Everywhere
            </h1>
            <h3 className='capitalize lg:text-lg text-center lg:text-left font-semibold mt-5'>
              Secure and efficient onboarding across the globe.
            </h3>
            <div className='hidden lg:block'>
              <CtaButtons />
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className='z-10 lg:text-lg text-center lg:text-left'>
            Enjoy a secure advantage with <br />
            our cutting-edge KYC solutions and <br />
            a comprehensive suite of tools toverify <br />
            and authenticate customer identities.
          </div>
          <div className='block lg:hidden'>
            <CtaButtons />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
