import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="w-full bg-white pt-12 md:pt-24 pb-16 md:pb-32">
      <div className="container-max">
        <div className="space-y-8 md:space-y-12">
          {/* Main Brand Name */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#111111]">
              Double Promotion
            </h1>
          </div>

          {/* Since 2005 - Main Visual Focus */}
          <div className="py-8 md:py-12 border-t border-b border-[#e8e8e8]">
            <p className="text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
              Since 2005
            </p>
          </div>

          {/* Subline */}
          <div>
            <p className="text-sm md:text-base font-semibold text-[#555555] tracking-wide">
              Wholesale & Retail
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4 md:pt-8">
            <Link to="/collection" className="btn-primary">
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
