'use client'

import { useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import FadeIn from './FadeIn'
import ScrollBasedLottie from './lotties/ScrollBasedLottie'
import phoneAnimation from '../public/lotties/phone.json'

const FEATURES = [
  {
    title: 'Identity Verification',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Seamlessly verify customer identities through a variety of methods,
          including document verification, biometric authentication, and facial
          recognition.
        </li>
        <li>
          Ensure compliance with global regulations by employing advanced
          identity verification techniques.
        </li>
      </ul>
    )
  },
  {
    title: 'Document Authentication',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Verify official documents such as passports, driver&apos;s licenses,
          and national IDs with our advanced document authentication technology.
        </li>
        <li>
          Detect fraudulent documents and prevent identity theft with our robust
          document verification processes.
        </li>
      </ul>
    )
  },
  {
    title: 'Biometric Authentication',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Enhance security with biometric authentication methods, including
          fingerprint and facial recognition.
        </li>
        <li>
          Provide a frictionless and secure user experience, eliminating the
          need for traditional and often cumbersome authentication methods.
        </li>
      </ul>
    )
  },
  {
    title: 'AML (Anti-Money Laundering) Screening',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Safeguard your business against financial crimes by conducting
          real-time AML screenings.
        </li>
        <li>
          Automatically flag and investigate suspicious activities, ensuring
          compliance with AML regulations.
        </li>
      </ul>
    )
  },
  {
    title: 'Customizalbe Workflows',
    description: (
      <ul className='xl:list-disc space-y-5 xl:pl-5'>
        <li>
          Tailor the KYC process to your business needs with our flexible and
          customizable workflows.
        </li>
        <li>
          Easily adapt to changing regulatory requirements while maintaining a
          smooth onboarding experience for your customers.
        </li>
      </ul>
    )
  }
]

export default function Features() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const y = useTransform(scrollYProgress, [0, 1], ['1%', '-60%'])

  return (
    <section
      ref={targetRef}
      className='relative h-[900vh] container mx-auto pb-20'
    >
      <div className='sticky top-0 z-20 h-screen'>
        <FadeIn>
          <div className='text-center py-10'>
            <span className='text-marine-blue text-lg md:text-xl'>
              Features
            </span>
            <h2 className='section-heading my-5'>
              Secure, Compliant, Seamless, Customizable
            </h2>
            <span className='text-gray-300 text-lg md:text-xl'>
              Experience the future of secure and compliant identity
              verification.
            </span>
          </div>
        </FadeIn>

        <div className='flex border-t'>
          <div className='space-y-8 md:space-y-12 text-center xl:text-left xl:w-1/2 md:px-10 xl:pr-24 xl:border-r py-10 lg:py-16 md:h-[80vh] overflow-hidden'>
            <motion.div style={{ y }} className='flex flex-col gap-12'>
              {FEATURES.map((item, i) => (
                <FadeIn key={item.title}>
                  <div
                    className='space-y-3 md:text-lg px-5 md:px-0'
                    id={i === 0 && 'featuresSection'}
                  >
                    <span className='text-marine-blue'>{item.title}</span>
                    <p className='text-white'>{item.description}</p>
                  </div>
                </FadeIn>
              ))}
            </motion.div>
          </div>
          <div className='relative flex-1 overflow-hidden'>
            <ScrollBasedLottie
              animationData={phoneAnimation}
              className='hidden xl:block absolute w-[200%] -left-96'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
