'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import FadeIn from './FadeIn'
import Image from 'next/image'

const quarters = [
  {
    name: 'Q1 2024',
    goals: ['Website Launch', 'Website SDK', 'API Documentation']
  },
  {
    name: 'Q2 2024',
    goals: [
      'Blockchain Enablement',
      'Decentralized Storage',
      'Multi-Layer Verification'
    ]
  },
  {
    name: 'Q3 2024',
    goals: ['Token Sale']
  },
  {
    name: 'Q4 2024',
    goals: ['NFT Integration']
  }
]

const Roadmap = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const y = useTransform(scrollYProgress, [0, 1], ['1%', '-70%'])

  return (
    <section ref={targetRef} className='relative h-[900vh] bg-black'>
      <div className='sticky top-0 z-20'>
        <div className='text-center pt-28 pb-10'>
          <FadeIn>
            <span className='text-marine-blue text-lg md:text-xl'>Roadmap</span>
            <h2 className='text-white text-6xl font-semibold my-5'>
              Step Into the Future
              <br />
              of ID Verification
            </h2>
            <span className='text-gray-300 text-xl'>
              Experience the future of secure and compliant identity
              verification.
            </span>
          </FadeIn>
        </div>
        <div className='flex items-start justify-end overflow-hidden gap-12 container mx-auto px-36 h-[60vh]'>
          <motion.div style={{ y }} className='flex flex-col gap-12 pt-36'>
            {quarters.map(quarter => (
              <div key={quarter.name} className='flex gap-12'>
                <div className='flex items-center text-gray-500'>
                  <div className='border-4 border-gray-500 rounded-full px-5 py-2'>
                    {quarter.name}
                  </div>
                </div>
                <div className='flex flex-col gap-12'>
                  {quarter.goals.map(goal => {
                    return (
                      <h3 key={goal} className='text-6xl text-gray-500 italic'>
                        {goal}
                      </h3>
                    )
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='sticky -ml-96 top-0 z-10'>
        <FadeIn>
          <Image
            src='/images/roadmap-image.svg'
            alt='Roadmap Image'
            width={1200}
            height={1200}
            priority
          />
        </FadeIn>
      </div>
    </section>
  )
}

export default Roadmap
