export function SkeletonProductCard() {
  return (
    <div className="group cursor-pointer">
      <div className="bg-[#F5F5F5] aspect-square mb-4 overflow-hidden skeleton rounded" />
      <div className="space-y-3">
        <div>
          <div className="h-3 bg-[#F5F5F5] skeleton rounded mb-2 w-1/3" />
          <div className="h-4 bg-[#F5F5F5] skeleton rounded w-2/3" />
        </div>
        <div className="h-3 bg-[#F5F5F5] skeleton rounded w-full" />
        <div className="flex items-center justify-between">
          <div className="h-4 bg-[#F5F5F5] skeleton rounded w-1/4" />
          <div className="h-3 bg-[#F5F5F5] skeleton rounded w-1/4" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonCategoryCard() {
  return (
    <div className="group text-center">
      <div className="bg-[#F5F5F5] aspect-square mb-3 overflow-hidden skeleton rounded" />
      <div className="h-4 bg-[#F5F5F5] skeleton rounded w-2/3 mx-auto" />
    </div>
  )
}

export function SkeletonHeroSection() {
  return (
    <section className="w-full bg-white py-24 md:py-32 border-b border-[#e8e8e8]">
      <div className="container-max">
        <div className="space-y-6">
          <div className="h-16 md:h-20 bg-[#F5F5F5] skeleton rounded w-3/4" />
          <div className="space-y-3">
            <div className="h-6 bg-[#F5F5F5] skeleton rounded w-1/2" />
            <div className="h-6 bg-[#F5F5F5] skeleton rounded w-1/3" />
          </div>
        </div>
      </div>
    </section>
  )
}
