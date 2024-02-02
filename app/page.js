import Hero from '@/components/Hero'
import Carousel from '@/components/Carousel'
import Showcase from '@/components/Showcase'

export default function Home() {
  return (
    <main className='flex justify-center min-h-screen min-w-screen'>
      <div className='w-full'>
        <Hero />
        <Carousel />
        <Showcase />
      </div>
    </main>
  )
}
