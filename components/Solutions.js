import Image from 'next/image'
import FadeIn from './FadeIn'

const solutions = [
  'Financial Services',
  'Gaming',
  'edTech',
  'Remittance',
  'Insurance',
  'Crypto',
  'Marketplace',
  'Logistic & eCommerece'
]

export default function Solutions() {
  return (
    <section className='w-full bg-black rounded-t-8xl'>
      <div className='container mx-auto pb-20'>
        <div className='text-center pt-20 pb-10'>
          <FadeIn>
            <span className='text-marine-blue text-xl'>Solutions</span>
            <h2 className='text-white text-5xl font-semibold my-5'>
              Provide a Seamless User Journey
              <br />
              Accelerate Your Business Growth
            </h2>
            <span className='text-gray-300 text-xl'>
              Experience the future of secure and compliant identity
              verification.
            </span>
          </FadeIn>
        </div>
        
        <FadeIn>
          <div className='grid grid-cols-2 lg:grid-cols-4 mt-5'>
            {solutions.map((solution, i) => (
              <div
                key={solution}
                className={`group flex flex-col items-start border-t border-l p-10 text-xl hover:cursor-pointer ${
                  i % 4 === 0 ? 'first:ml-0 border-l-0' : ''
                } ${i % 4 === 3 ? 'last:mr-0' : ''}`}
              >
                <div className='bg-light-blue rounded-full w-[52px] h-[52px] mb-8 group-hover:opacity-80'></div>
                <span className='group-hover:opacity-80'>{solution}</span>
                <button className='text-light-blue group-hover:opacity-80 flex items-center'>
                  <span>Explore</span>
                  <Image
                    className='ml-3'
                    src='/images/arrow.svg'
                    alt='Arrow'
                    width={31}
                    height={20}
                  />
                </button>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
