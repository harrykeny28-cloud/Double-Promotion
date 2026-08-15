import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import OptimizedImage from '../components/OptimizedImage'
import products from '../data/products.json'
import categories from '../data/categories.json'
import tshirtImage from '../Assests/t-shirt.jpg'
import shirtImage from '../Assests/shirt.jpg'
import trousersImage from '../Assests/Trousers.jpg'
import jacketsImage from '../Assests/Jackets.jpg'
import chinosImage from '../Assests/Chinos.jpg'
import poloImage from '../Assests/Polo shirt.jpg'

const imageMap = {
  tshirts: tshirtImage,
  shirts: shirtImage,
  trousers: trousersImage,
  jackets: jacketsImage,
  chinos: chinosImage,
  polos: poloImage,
}

export default function Collection() {
  const { categoryId } = useParams()
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    let result = [...products]

    // Filter by category if provided
    if (categoryId) {
      result = result.filter(p => p.category === categoryId)
      const cat = categories.find(c => c.id === categoryId)
      setSelectedCategory(cat)
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.priceValue - b.priceValue)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.priceValue - a.priceValue)
    } else if (sortBy === 'new') {
      result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
    }

    setFilteredProducts(result)
  }, [categoryId, sortBy])

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-white border-b border-[#e8e8e8] py-8 md:py-12">
        <div className="container-max">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#111111] mb-4">
            {selectedCategory ? selectedCategory.name : 'All Products'}
          </h1>
          {selectedCategory && (
            <p className="text-base font-normal text-[#555555]">
              {selectedCategory.description}
            </p>
          )}
          <p className="text-sm font-semibold text-[#555555] mt-4">
            {filteredProducts.length} Products
          </p>
        </div>
      </section>

      {/* Filters & Sorting */}
      <section className="bg-white border-b border-[#e8e8e8] py-6 md:py-8 sticky top-16 z-40">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[#555555]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm font-semibold text-[#111111] bg-white border border-[#e8e8e8] px-4 py-2 hover:border-[#111111] transition-colors cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="new">New Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {categoryId && (
              <a
                href="/collection"
                className="text-sm font-semibold text-[#555555] hover:text-[#111111] transition-colors"
              >
                View All Categories
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      {categoryId ? (
        // Category View - Single Column for categories
        <section className="bg-white py-12 md:py-16">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        // All Products View - Show Categories First
        <>
          <section className="bg-white py-12 md:py-16 border-b border-[#e8e8e8]">
            <div className="container-max">
              <div className="mb-8">
                <p className="section-label mb-4">Browse</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111111] mb-8">
                  All Categories
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                {categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`/collection/${cat.id}`}
                    className="group text-center"
                  >
                    <div className="bg-[#F5F5F5] aspect-square mb-3 overflow-hidden flex items-center justify-center">
                      <OptimizedImage
                        src={imageMap[cat.id]}
                        alt={cat.name}
                        width="300"
                        height="300"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-[#111111] group-hover:text-[#555555] transition-colors">
                      {cat.name}
                    </h3>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white py-12 md:py-16">
            <div className="container-max">
              <div className="mb-8">
                <p className="section-label mb-4">Featured</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111111]">
                  All Products
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
