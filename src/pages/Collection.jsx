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

const PRODUCTS_PER_PAGE = 12

export default function Collection() {
  const { categoryId } = useParams()
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [sortBy, setSortBy] = useState('featured')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    let result = [...products]

    // Filter by category if provided
    if (categoryId) {
      result = result.filter(p => p.category === categoryId)
      const cat = categories.find(c => c.id === categoryId)
      setSelectedCategory(cat)
    } else {
      // When viewing ALL products, apply genuine-first ordering globally
      // Separate genuine products (have brand) from dummy products
      const genuineProducts = result.filter(p => p.brand)
      const dummyProducts = result.filter(p => !p.brand)

      // Sort each group by the selected sort option
      const sortFunction = (a, b) => {
        if (sortBy === 'featured') {
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        } else if (sortBy === 'price-low') {
          return a.priceValue - b.priceValue
        } else if (sortBy === 'price-high') {
          return b.priceValue - a.priceValue
        } else if (sortBy === 'new') {
          return (b.new ? 1 : 0) - (a.new ? 1 : 0)
        }
        return 0
      }

      genuineProducts.sort(sortFunction)
      dummyProducts.sort(sortFunction)

      // Combine: Genuine products first, then dummy products
      result = [...genuineProducts, ...dummyProducts]
    }

    // Apply product ordering priority for Shirts category
    if (categoryId === 'shirts') {
      // ALWAYS separate genuine and dummy products for Shirts
      // Genuine products MUST appear first regardless of any other factor
      const genuineShirts = result.filter(p => p.brand) // Has brand = genuine
      const dummyShirts = result.filter(p => !p.brand) // No brand = dummy

      // Sort genuine shirts by selected sort option
      if (sortBy === 'featured') {
        genuineShirts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      } else if (sortBy === 'price-low') {
        genuineShirts.sort((a, b) => a.priceValue - b.priceValue)
      } else if (sortBy === 'price-high') {
        genuineShirts.sort((a, b) => b.priceValue - a.priceValue)
      } else if (sortBy === 'new') {
        genuineShirts.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
      }

      // Sort dummy shirts by selected sort option
      if (sortBy === 'featured') {
        dummyShirts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      } else if (sortBy === 'price-low') {
        dummyShirts.sort((a, b) => a.priceValue - b.priceValue)
      } else if (sortBy === 'price-high') {
        dummyShirts.sort((a, b) => b.priceValue - a.priceValue)
      } else if (sortBy === 'new') {
        dummyShirts.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
      }

      // ALWAYS: Genuine shirts first, then dummy shirts
      // This ensures genuine products always appear before dummy products
      result = [...genuineShirts, ...dummyShirts]
    }

    setFilteredProducts(result)
    setCurrentPage(1) // Reset to first page when filters/sort changes
  }, [categoryId, sortBy])

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Scroll to products section
    const productsSection = document.getElementById('products-section')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1)
    }
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

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
        // Category View - with pagination
        <>
          <section className="bg-white py-12 md:py-16" id="products-section">
            <div className="container-max">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center md:justify-center gap-6">
                  {/* Previous Button */}
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-6 py-3 text-sm font-semibold border transition-all ${
                      currentPage === 1
                        ? 'border-[#e8e8e8] text-[#d0d0d0] cursor-not-allowed'
                        : 'border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white'
                    }`}
                  >
                    ← Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-2 justify-center flex-wrap">
                    {getPageNumbers().map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 text-sm font-semibold border transition-all ${
                          page === currentPage
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'border-[#e8e8e8] text-[#111111] hover:border-[#111111]'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-6 py-3 text-sm font-semibold border transition-all ${
                      currentPage === totalPages
                        ? 'border-[#e8e8e8] text-[#d0d0d0] cursor-not-allowed'
                        : 'border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white'
                    }`}
                  >
                    Next →
                  </button>
                </div>
              )}

              {/* Page Info */}
              {totalPages > 1 && (
                <div className="mt-6 text-center text-xs font-semibold text-[#555555]">
                  Page {currentPage} of {totalPages}
                </div>
              )}
            </div>
          </section>
        </>
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
                        className="w-full h-full object-contain group-hover:opacity-75 transition-opacity"
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

          <section className="bg-white py-12 md:py-16" id="products-section">
            <div className="container-max">
              <div className="mb-8">
                <p className="section-label mb-4">Featured</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#111111]">
                  All Products
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center md:justify-center gap-6">
                  {/* Previous Button */}
                  <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-6 py-3 text-sm font-semibold border transition-all ${
                      currentPage === 1
                        ? 'border-[#e8e8e8] text-[#d0d0d0] cursor-not-allowed'
                        : 'border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white'
                    }`}
                  >
                    ← Previous
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-2 justify-center flex-wrap">
                    {getPageNumbers().map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 text-sm font-semibold border transition-all ${
                          page === currentPage
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'border-[#e8e8e8] text-[#111111] hover:border-[#111111]'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-6 py-3 text-sm font-semibold border transition-all ${
                      currentPage === totalPages
                        ? 'border-[#e8e8e8] text-[#d0d0d0] cursor-not-allowed'
                        : 'border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white'
                    }`}
                  >
                    Next →
                  </button>
                </div>
              )}

              {/* Page Info */}
              {totalPages > 1 && (
                <div className="mt-6 text-center text-xs font-semibold text-[#555555]">
                  Page {currentPage} of {totalPages}
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  )
}
