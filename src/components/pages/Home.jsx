import React from 'react'
import { HeroSection } from '../home/HeroSection'
import { FeaturedDishes } from '../home/FeaturedDishes'
import { ChefsSection } from '../home/ChefsSection'
import { ReviewsSection } from '../home/ReviewsSection'
import { GallerySection } from '../home/GallerySection'
import { BranchesSection } from '../home/BranchesSection'

export const Home = () => {
  return (
    <div className='mb-20'>
      <HeroSection />
      <FeaturedDishes />
      <ChefsSection />
      <ReviewsSection />
      <GallerySection />
      <BranchesSection />
    </div>
  )
}