'use client'

import Image from 'next/image'

const items = [
  {
    title: 'Identity Verification',
    description: (
      <ul className='xl:list-disc space-y-5 pl-5'>
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
      <ul className='xl:list-disc space-y-5 pl-5'>
        <li>
          Verify official documents such as passports, driver's licenses, and
          national IDs with our advanced document authentication technology.
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
      <ul className='xl:list-disc space-y-5 pl-5'>
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
  }
]

export default function Features() {
  return (
    <section className='container mx-auto pb-20'>
      <div className='text-center pt-20 pb-10'>
        <span className='text-marine-blue text-xl'>Features</span>
        <h2 className='text-white text-5xl font-semibold my-5'>
          Secure, Compliant, Seamless, Customizable
        </h2>
        <span className='text-gray-300 text-xl'>
          Experience the future of secure and compliant identity verification.
        </span>
      </div>
      <div className='relative border-t'>
        <Image
          className='hidden xl:block absolute top-20 right-0 cube-1'
          src='/images/features-image.svg'
          alt='Features'
          width={712}
          height={712}
          priority
        />
        <div className='space-y-12 text-center xl:text-left xl:w-1/2 px-10 xl:pr-24 xl:border-r py-16'>
          {items.map(item => (
            <div key={item.title} className='space-y-3 text-lg'>
              <span className='text-marine-blue'>{item.title}</span>
              <p className='text-white'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
