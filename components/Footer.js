'use client'

import Image from 'next/image'
import FadeIn from './FadeIn'
import { links } from './Header'

export default function Footer() {
  return (
    <section className='w-full bg-black z-40 pt-56'>
      <div className='container mx-auto py-20 border-t flex flex-col xl:flex-row gap-20 xl:gap-64 items-center xl:items-start'>
        <div className='w-1/2'>
          <FadeIn>
            <Image
              src='/images/digifime-logo.svg'
              alt='Arrow'
              width={433}
              height={100}
            />
            <div className='text-sm mt-10'>
              Secure and efficient onboarding across the globe.
            </div>
          </FadeIn>
        </div>

        <div className='grid text-center lg:text-left justify-center space-y-20 lg:space-y-0 flex-grow w-full'>
          <FadeIn>
            <div className='flex flex-col space-y-5 xl:space-y-10'>
              {links.map(link => (
                <FadeIn key={link.title}>
                  <a href={link.url}>{link.title}</a>
                </FadeIn>
              ))}
              <FadeIn>
                  <div>Book a Demo</div>
                </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
