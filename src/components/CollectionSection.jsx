import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard'
import categories from '../data/categories.json'

export default function CollectionSection() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    setCats(categories.slice(0, 6))
  }, [])

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container-max">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="section-label mb-4">Collections</p>
              <h2 className="text-3xl md:text-5xl font-light text-[#111111]">
                Shop by Category
              </h2>
            </div>
            <Link to="/collection" className="text-sm font-normal text-[#111111] hover:text-[#555555] tracking-wide transition-colors">
              View All →
            </Link>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {cats.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
