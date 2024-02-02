'use client'

import Image from 'next/image'
import { CtaButtons } from './Hero'

const items = [
  {
    title: 'Tamper-Proof',
    description: (
      <>
        Blockchain technology ensures that your records are tamper-proof; only
        you can update it when you need to.
      </>
    )
  },
  {
    title: 'Immutable',
    description: (
      <>
        All your records are stored on the blockchain so your record history is
        accessible to you anytime, anywhere.
      </>
    )
  },
  {
    title: 'Accountability',
    description: (
      <>
        You can also ensure that you are providing your information to
        individuals who are also KYC-verified.
      </>
    )
  }
]

export default function Showcase() {
  return (
    <section className='container mx-auto pb-20'>
      <div className='text-center py-20'>
        <span className='text-marine-blue text-xl'>
          Tamper-Proof and Immutable
        </span>
        <h2 className='text-white text-5xl font-semibold mt-5'>
          The 1st Blockchain-Enabled
          <br />
          ID Verification System in The World
        </h2>
      </div>
      <div className='relative'>
        <Image
          className='hidden lg:block absolute -top-72 -left-32 xl:-left-24 2xl:left-14 cube-3'
          src='/images/cube3.svg'
          alt='Cube'
          width={400}
          height={400}
          priority
        />
        <Image
          className='hidden lg:block absolute -top-28 -left-32 xl:-left-48 2xl:-left-6 cube-2'
          src='/images/cube2.svg'
          alt='Cube'
          width={485}
          height={485}
          priority
        />
        <Image
          className='hidden lg:block absolute -top-28 -left-32 xl:-left-16 2xl:left-56 cube-1'
          src='/images/cube1.svg'
          alt='Cube'
          width={712}
          height={712}
          priority
        />
        <div className='space-y-12 text-center lg:text-left lg:w-1/2 ml-auto px-10 xl:px-36'>
          {items.map(item => (
            <div key={item.title} className='space-y-3 text-lg'>
              <span className='text-marine-blue'>{item.title}</span>
              <p className='text-white'>{item.description}</p>
            </div>
          ))}
          <CtaButtons />
        </div>
      </div>
    </section>
  )
}
