import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard'
import { SkeletonCategoryCard } from './SkeletonLoader'

export default function CollectionSlider({ categories }) {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  // Check scroll position
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)
    
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  // Scroll function
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
      
      // Check scroll state after a small delay
      setTimeout(checkScroll, 500)
    }
  }

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container-max">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="section-label mb-4">Collections</p>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#111111]">
                Shop by Category
              </h2>
            </div>
            <Link 
              to="/collection" 
              className="text-sm font-semibold text-[#111111] hover:text-[#555555] tracking-wide transition-colors"
            >
              View All →
            </Link>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Desktop/Tablet Navigation Controls */}
          <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none justify-between px-0 z-10">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`pointer-events-auto -translate-x-16 md:-translate-x-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-[#e8e8e8] hover:border-[#111111] transition-all ${
                !canScrollLeft
                  ? 'opacity-30 cursor-not-allowed'
                  : 'cursor-pointer hover:bg-[#f5f5f5]'
              }`}
              aria-label="Previous categories"
            >
              <svg
                className="w-5 h-5 text-[#111111]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`pointer-events-auto translate-x-16 md:translate-x-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-[#e8e8e8] hover:border-[#111111] transition-all ${
                !canScrollRight
                  ? 'opacity-30 cursor-not-allowed'
                  : 'cursor-pointer hover:bg-[#f5f5f5]'
              }`}
              aria-label="Next categories"
            >
              <svg
                className="w-5 h-5 text-[#111111]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 md:gap-8 lg:gap-12 overflow-x-auto scroll-smooth pb-4 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {/* Hide scrollbar */}
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Category Cards */}
            {isLoading ? (
              <>
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                  <SkeletonCategoryCard />
                </div>
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                  <SkeletonCategoryCard />
                </div>
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                  <SkeletonCategoryCard />
                </div>
              </>
            ) : (
              categories.map((category) => (
                <div
                  key={category.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                >
                  <CategoryCard category={category} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
