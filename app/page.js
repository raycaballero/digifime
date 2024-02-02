import Hero from '@/components/Hero'
import Carousel from '@/components/Carousel'
import Showcase from '@/components/Showcase'
import Features from '@/components/Features'
import Solutions from '@/components/Solutions'

export default function Home() {
  return (
    <main className='flex justify-center min-h-screen min-w-screen'>
      <div className='w-full'>
        <Hero />
        <Carousel />
        <Showcase />
        <Features />
        <Solutions />
      </div>
    </main>
  )
}
