export const metadata = {
  title: 'Home - Tidy',
  description: 'Page description',
}

import Hero from '@/components/hero-home'
import FeaturesBlocks from '@/components/features-blocks'
import Features from '@/components/features-home'
import Features02 from '@/components/features-home-02'
import Features03 from '@/components/features-home-03'
import Target from '@/components/target'
import PricingSection from '@/components/pricing'
import Cta from '@/components/cta'
import ImageGrid from '@/components/ImageGrid'

export default function Home() {
  return (
    <>
    
      <Hero />
      <Features03 />
      <ImageGrid />
      <FeaturesBlocks />
      <PricingSection />
      <Cta />
      {/* <Features /> */}
      {/* <Target /> */}
      <Features02 />
      
     
    </>
  )
}
