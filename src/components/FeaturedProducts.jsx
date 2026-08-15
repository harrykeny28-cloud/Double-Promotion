import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import { SkeletonProductCard } from './SkeletonLoader'
import products from '../data/products.json'

export default function FeaturedProducts() {
  const [featured, setFeatured] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const featuredProducts = products.filter(p => p.featured).slice(0, 4)
      setFeatured(featuredProducts)
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-[#e8e8e8]">
      <div className="container-max">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="section-label mb-4">Curated Selection</p>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#111111]">
                Featured Products
              </h2>
            </div>
            <Link to="/collection" className="text-sm font-semibold text-[#111111] hover:text-[#555555] tracking-wide transition-colors">
              View Collection →
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {isLoading ? (
            <>
              <SkeletonProductCard />
              <SkeletonProductCard />
              <SkeletonProductCard />
              <SkeletonProductCard />
            </>
          ) : (
            featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
