import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import CollectionSlider from '../components/CollectionSlider'
import FeaturedProducts from '../components/FeaturedProducts'
import BrandStory from '../components/BrandStory'
import categories from '../data/categories.json'

export default function Home() {
  return (
    <div className="w-full">
      <div className="fade-in"><Hero /></div>
      <div className="fade-in-delay-1"><CollectionSlider categories={categories} /></div>
      <div className="fade-in-delay-2"><FeaturedProducts /></div>
      <div className="fade-in-delay-3"><BrandStory /></div>
    </div>
  )
}
