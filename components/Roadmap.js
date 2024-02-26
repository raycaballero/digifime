'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import FadeIn from './FadeIn'
import Image from 'next/image'

const GOALS = [
  {
    quarter: 'Q1 2024',
    title: 'Industry-specific solutions',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Develop tailored solutions for specific industries such as healthcare,
          finance, and online marketplaces.
        </li>
        <li>Ensure compliance with industry regulations and standards.</li>
      </ul>
    )
  },
  {
    quarter: 'Q2 2024',
    title: 'Customizable workflows',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Introduce a flexible and customizable workflow system to accommodate
          varying verification processes across industries.
        </li>
        <li>Provide APIs for seamless integration with existing systems.</li>
      </ul>
    )
  },
  {
    quarter: 'Q2 2024',
    title: 'Real-time monitoring & alerts',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Implement a real-time monitoring system to detect and alert on
          suspicious activities.
        </li>
        <li>
          Enhance fraud prevention mechanisms through proactive alerts and
          notifications.
        </li>
      </ul>
    )
  },
  {
    quarter: 'Q2 2024',
    title: 'Advanced biometric options',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Integrate additional biometric verification methods, such as retina
          scanning and palm recognition.
        </li>
        <li>
          Enhance existing biometric algorithms for improved accuracy and
          security.
        </li>
      </ul>
    )
  },
  {
    quarter: 'Q2 2024',
    title: 'Multi-language support',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Expand language support for document verification and user
          communication.
        </li>
        <li>Ensure inclusivity and accessibility for a diverse user base.</li>
      </ul>
    )
  },
  {
    quarter: 'Q2 2024',
    title: 'Enhanced document validation',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Improve document validation capabilities by incorporating advanced OCR
          technology.
        </li>
        <li>Introduce support for new types of identity documents.</li>
      </ul>
    )
  },
  {
    quarter: 'Q2 2024',
    title: 'Zero-knowledge proofs',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Implement zero-knowledge proofs to allow identity verification without
          revealing unnecessary information.
        </li>
        <li>Enhance user privacy and reduce the risk of data breaches.</li>
      </ul>
    )
  },
  {
    quarter: 'Q2 2024',
    title: 'Biometric data encryption',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Utilize blockchain for the secure and decentralized storage of
          biometric data.
        </li>
        <li>
          Implement encryption mechanisms to protect sensitive information.
        </li>
      </ul>
    )
  },

  {
    quarter: 'Q2 2024',
    title: 'Interoperability & cross-platform integration',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Ensure compatibility with existing identity standards (e.g., W3C
          Verifiable Credentials).
        </li>
        <li>
          Facilitate interoperability with other blockchain-based identity
          solutions.
        </li>
        <li>
          Explore partnerships with organizations adopting decentralized
          identity standards.
        </li>
      </ul>
    )
  },
  {
    quarter: 'Q2 2024',
    title: 'User-controlled data sharing',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Develop a user-centric data-sharing model where individuals have full
          control over when and with whom they share their identity information.
        </li>
        <li>
          Implement features for users to revoke access to their data at any
          time.
        </li>
      </ul>
    )
  },
  {
    quarter: 'Q2 2024',
    title: 'Regulatory compliance',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Stay abreast of evolving regulations related to blockchain and
          identity verification.
        </li>
        <li>
          Implement features that facilitate compliance with regional and
          industry-specific regulations.
        </li>
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
    <section ref={targetRef} className='relative h-[900vh] bg-black px-0'>
      <div className='sticky top-0'>
        <FadeIn>
          <div className='text-center px-5 py-10 z-40'>
            <span className='text-marine-blue text-lg md:text-xl'>Roadmap</span>
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
