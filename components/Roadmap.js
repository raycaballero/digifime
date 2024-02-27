'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import FadeIn from './FadeIn'
import Image from 'next/image'

const GOALS = [
  {
    quarter: 'Q1 2024',
    // title: 'Industry-specific solutions',
    description: (
      <ul className='xl:list-disc space-y-1 xl:pl-5'>
        <li>First level KYC platform - OCR</li>
        <li>Registration and password module</li>
        <li>Referral module</li>
        <li>Commision module</li>
        <li>Credits module</li>
        <li>Basic admin panel</li>
        <li>Security features</li>
        <li>First country - Philippines databases integration</li>
        <li>Website</li>
        <li>Pilot integration - Top Wallet</li>
        <li>Third party pilot validation - QPay</li>
        <li>Social media presence kick-off</li>
      </ul>
    )
  },
  {
    quarter: 'Q2 2024',
    description: (
      <ul className='xl:list-disc space-y-1 xl:pl-5'>
        <li>User acquisition - 6 clients and 150k users</li>
        <li>2 government contracts</li>
        <li>2 additional countries added</li>
        <li>
          Digibox implementation - one perpetual KYC source for all business
        </li>
        <li>Primary Blockchain integration - documents as NFT&apos;s</li>
        <li>Secondary Blockchain integration</li>
        <li>Publish APIs and SDKs</li>
        <li>Vulnerability and Penetration testing (VAPT)</li>
        <li>Code review</li>
        <li>Seed round - 6 month runway</li>
      </ul>
    )
  },
  {
    quarter: 'Q3 2024',
    description: (
      <ul className='xl:list-disc space-y-1 xl:pl-5'>
        <li>User acquisition - 12 clients and 300k users</li>
        <li>2 additional countries added</li>
        <li>Token creation</li>
        <li>Tokenomics and white paper</li>
        <li>Digibox decentralized - Reward for contribution</li>
        <li>Community building</li>
        <li>Token raise</li>
        <li>Smart contract audit</li>
        <li>Code review 2</li>
      </ul>
    )
  },
  {
    quarter: 'Q4 2024',
    description: (
      <ul className='xl:list-disc space-y-1 xl:pl-5'>
        <li>User acquisition - 15 clients and 500k users</li>
        <li>Token listing</li>
        <li>Expand B2B offerings - OCR v2 (process complex documents)</li>
        <li>Video KYC</li>
        <li>Series A - 1 year runway</li>
      </ul>
    )
  }
]

const Card = ({ card }) => {
  return (
    <FadeIn key={card.id}>
      <div className='space-y-3 md:text-lg px-5 md:px-0 w-[300px] md:w-[460px] flex flex-col items-start'>
        <span className='bg-marine-blue px-6 py-2 rounded-full text-sm -mt-4 mb-4 -ml-4'>
          {card.quarter}
        </span>
        <span className='text-marine-blue font-bold'>{card.title}</span>
        <p className='text-white'>{card.description}</p>
      </div>
    </FadeIn>
  )
}

const Roadmap = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['-5%', '-100%'])

  return (
    <section ref={targetRef} className='relative h-[900vh] bg-black px-0' id="roadmap">
      <div className='sticky top-0'>
        <FadeIn>
          <div className='text-center px-5 py-10 z-40'>
            <span className='text-marine-blue text-xl md:text-2xl font-bold'>
              Roadmap
            </span>
            <h2 className='section-heading my-5'>
              Step Into the Future
              <br />
              of ID Verification
            </h2>
            <span className='text-gray-300 text-lg md:text-xl'>
              Developing mutual trust in all areas of the ID Verification
              process.
            </span>
          </div>
        </FadeIn>
        <div className='absolute left-1/2 transform -translate-x-1/2 bottom-36 sm:bottom-28 md:bottom-0 xl:-bottom-56 max-w-full max-h-full scale-[150%] sm:scale-100'>
          <FadeIn>
            <Image
              src='/images/roadmap-image.png'
              alt='Roadmap Image'
              className='brightness-[30%] pulsating'
              width={1200}
              height={1200}
            />
          </FadeIn>
        </div>
        {/* <div className='flex items-start justify-end overflow-hidden gap-12 container mx-auto px-36 '> */}
        <div className='sticky top-0 flex h-[60vh] items-center overflow-hidden pl-48 md:pl-96'>
          <motion.div style={{ x }} className='flex gap-8 md:gap-16 border-t'>
            {GOALS.map(card => {
              return <Card card={card} key={card.id} />
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
