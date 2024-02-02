'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

const Carousel = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])

  return (
    <section ref={targetRef} className='relative h-[300vh] bg-dark-blue'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden pl-48'>
        <motion.div style={{ x }} className='flex gap-12'>
          {cards.map(card => {
            return <Card card={card} key={card.id} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

const Card = ({ card }) => {
  return (
    <div key={card.id} className='group'>
      <div className='relative h-[400px] md:h-[594px] w-[250px] md:w-[382px] overflow-hidden'>
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
        ></div>
      </div>
      <div className='group-hover:text-gray-300'>
        <h5 className='text-lg mt-10'>{card.title}</h5>
        <h3 className='text-3xl mt-3 font-semibold'>{card.description}</h3>
      </div>
    </div>
  )
}

export default Carousel

const cards = [
  {
    url: '/images/card1.png',
    title: 'Guaranteed',
    description: (
      <>
        95% Auto
        <br />
        Approval Rate
      </>
    ),
    id: 1
  },
  {
    url: '/images/card2.png',
    title: 'Worldwide',
    description: (
      <>
        195+ Countries
        <br />
        Covered
      </>
    ),
    id: 2
  },
  {
    url: '/images/card2.png',
    title: 'Guaranteed',
    description: (
      <>
        50% Drop off
        <br />
        Reduction
      </>
    ),
    id: 3
  },
  {
    url: '/images/card3.png',
    title: 'Guaranteed',
    description: (
      <>
        Over 70M <br />
        Customers
        <br /> Abroad
      </>
    ),
    id: 4
  }
]
