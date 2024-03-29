// import Image from 'next/image'
import FadeIn from './FadeIn'

const solutions = [
  {
    'title': 'Financial Services',
    'description': 'Safeguard against fraudulent activities.'
  },
  {
    'title': 'eSports',
    'description': 'Maintain a safe esports environment.'
  },
  {
    'title': 'edTech',
    'description': 'Guarantee safety and credibility for users.'
  },
  {
    'title': 'Remittance',
    'description': 'Ensure compliance to mitigate risks.'
  },
  {
    'title': 'Insurance',
    'description': 'Enhance fraud detection and streamline policies.'
  },
  {
    'title': 'Crypto',
    'description': 'Provide security and compliance to the community.'
  },
  {
    'title': 'Marketplace',
    'description': 'Build trust and credibility in online platforms.'
  },
  {
    'title': 'Logistics & eCommerce',
    'description': 'Optimize supply chain management processes.'
  },
]

export default function Solutions() {
  return (
    <section className='w-full bg-black rounded-t-8xl' id="solutions">
      <div className='container mx-auto pb-20'>
        <div className='text-center py-10 md:pt-20'>
          <FadeIn>
            <span className='text-marine-blue text-xl md:text-2xl font-bold'>Solutions</span>
            <h2 className='section-heading my-5'>
              Provide a Seamless User Journey
              <br />
              Accelerate Your Business Growth
            </h2>
            <span className='text-gray-300 md:text-xl'>
              Experience the future of secure and compliant identity
              verification.
            </span>
          </FadeIn>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 mt-5'>
          {solutions.map((solution, i) => (
            <FadeIn key={solution}>
              <div
                className={`group flex flex-col items-start border-t border-l p-5 md:p-10 text-sm md:text-xl hover:cursor-pointer 
                ${i % 2 === 0 && 'border-l-0 lg:border-l'} 
                ${i % 4 === 0 && 'lg:border-l-0'} 
                `}
              >
                <div className='bg-light-blue rounded-full w-[52px] h-[52px] mb-8 group-hover:opacity-80'></div>
                <span className='group-hover:opacity-80 font-bold mb-3'>{solution.title}</span>
                <small className='group-hover:opacity-80 text-marin text-gray-300'>{solution.description}</small>
                {/* <button className='text-light-blue group-hover:opacity-80 flex items-center'>
                  <span>Explore</span>
                  <Image
                    className='ml-3'
                    src='/images/arrow.svg'
                    alt='Arrow'
                    width={31}
                    height={20}
                  />
                </button> */}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
