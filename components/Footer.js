import Image from 'next/image'
import FadeIn from './FadeIn'

const links = [
  {
    category: 'Product',
    items: [
      'Digifime',
      'ID Verification',
      'Face Authentication',
      'Know Your Business',
      'CKYC'
    ]
  },
  {
    category: 'Industries',
    items: [
      'Gaming',
      'edTech',
      'Remittance',
      'Insurance',
      'Crypto',
      'Marketplaces'
    ]
  },
  {
    category: 'Resources',
    items: [
      'Blogs',
      'Customer',
      'Company',
      'Careers',
      'Privacy Policy',
      'contact@digi.co'
    ]
  }
]

export default function Footer() {
  return (
    <section className='w-full bg-black'>
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
              Empowering frictionless onboarding across the globe
            </div>
          </FadeIn>
        </div>

        <div className='grid text-center lg:text-left lg:grid-cols-3 space-y-20 lg:space-y-0 flex-grow w-full'>
          {links.map(link => (
            <FadeIn key={link.category}>
              <div className='flex flex-col space-y-10'>
                <div className='font-semibold'>{link.category}</div>
                {link.items.map(item => (
                  <FadeIn key={item}>
                    <div>{item}</div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
