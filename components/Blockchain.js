'use client'

import Image from 'next/image'
import { CtaButtons } from './Hero'
import FadeIn from './FadeIn'

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

export default function Blockchain() {
  return (
    <section className='container mx-auto pb-20' id="blockchain">
      <FadeIn>
        <div className='text-center py-20'>
          <span className='text-marine-blue text-xl md:text-2xl font-bold'>
            Tamper-Proof and Immutable
          </span>
          <h2 className='section-heading mt-5'>
            The 1st Blockchain-Enabled
            <br />
            ID Verification System in The World
          </h2>
        </div>
      </FadeIn>
      <div className='relative'>
        <FadeIn>
          <Image
            className='cube cube-3'
            src='/images/cube3.png'
            alt='Cube'
            width={400}
            height={400}
          />
        </FadeIn>
        <FadeIn>
          <Image
            className='cube cube-2'
            src='/images/cube2.png'
            alt='Cube'
            width={485}
            height={485}
          />
        </FadeIn>
        <FadeIn>
          <Image
            className='cube cube-1'
            src='/images/cube1.png'
            alt='Cube'
            width={712}
            height={712}
          />
        </FadeIn>
        <div className='space-y-8 md:space-y-12 text-center lg:text-left lg:w-1/2 ml-auto md:px-10 xl:px-36'>
          {items.map(item => (
            <FadeIn key={item.title}>
              <div className='space-y-3 md:text-lg px-5 md:px-0'>
                <span className='text-marine-blue text-lg font-bold'>{item.title}</span>
                <p className='text-white'>{item.description}</p>
              </div>
            </FadeIn>
          ))}
          <FadeIn>
            <CtaButtons />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
