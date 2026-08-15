import { Link } from 'react-router-dom'
import OptimizedImage from '../components/OptimizedImage'
import aboutImage from '../Assests/About.jpg'

export default function About() {
  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="py-12 md:py-16 border-b border-[#e8e8e8]">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6">
            About Double Promotion
          </h1>
          <p className="text-lg font-normal text-[#555555] max-w-2xl">
            Since 2005, we've been crafting premium men's fashion with an uncompromising commitment to quality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <div>
                <p className="section-label mb-4">Foundation</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#111111]">
                  Established 2005
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-base md:text-lg font-normal text-[#111111] leading-relaxed">
                  Double Promotion was founded on a simple principle: men deserve fashion that doesn't compromise on quality. From day one, we've focused on timeless design, premium materials, and thoughtful construction.
                </p>

                <p className="text-base md:text-lg font-normal text-[#111111] leading-relaxed">
                  Starting with wholesale and retail operations, we've built trust with partners and customers alike. Our collections reflect what modern men actually want — pieces that work, pieces that last, pieces that make sense.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F5F5] aspect-square flex items-center justify-center">
              <OptimizedImage
                src={aboutImage}
                alt="Double Promotion Store"
                width="600"
                height="600"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-24 bg-[#F5F5F5]">
        <div className="container-max">
          <div className="mb-12">
            <p className="section-label mb-4">Values</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111]">
              What We Believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#111111]">
                Quality First
              </h3>
              <p className="text-base font-normal text-[#555555] leading-relaxed">
                Every piece is selected and crafted with meticulous attention. We use premium materials and precision construction because shortcuts aren't an option.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#111111]">
                Timeless Design
              </h3>
              <p className="text-base font-normal text-[#555555] leading-relaxed">
                We design pieces meant to last. No trends, no excess. Just clean, minimal silhouettes that work today and tomorrow.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#111111]">
                Customer Trust
              </h3>
              <p className="text-base font-normal text-[#555555] leading-relaxed">
                We're built on relationships. Whether you're a wholesale partner or a retail customer, your trust matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Highlight */}
      <section className="py-12 md:py-24">
        <div className="container-max">
          <div className="mb-12">
            <p className="section-label mb-4">Collections</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111]">
              Curated Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#111111] mb-6">
                Everyday Essentials
              </h3>
              <ul className="space-y-3">
                <li className="text-base font-normal text-[#555555]">
                  • T-Shirts — Premium cotton basics
                </li>
                <li className="text-base font-normal text-[#555555]">
                  • Polos — Refined and versatile
                </li>
                <li className="text-base font-normal text-[#555555]">
                  • Chinos — Comfort meets style
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#111111] mb-6">
                Professional & Occasion
              </h3>
              <ul className="space-y-3">
                <li className="text-base font-normal text-[#555555]">
                  • Shirts — From casual to formal
                </li>
                <li className="text-base font-normal text-[#555555]">
                  • Trousers — Tailored precision
                </li>
                <li className="text-base font-normal text-[#555555]">
                  • Jackets — Structured outerwear
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale & Retail */}
      <section className="py-12 md:py-24 border-t border-[#e8e8e8]">
        <div className="container-max">
          <div className="mb-12">
            <p className="section-label mb-4">Operations</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111]">
              Wholesale & Retail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#111111]">
                Wholesale Partnerships
              </h3>
              <p className="text-base font-normal text-[#555555] leading-relaxed">
                We work with retailers, boutiques, and brands across India. Our wholesale program is built on flexibility, quality, and partnership.
              </p>
              <a href="/contact" className="btn-outline inline-block">
                Inquire Wholesale
              </a>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#111111]">
                Retail Experience
              </h3>
              <p className="text-base font-normal text-[#555555] leading-relaxed">
                Visit our store for the full Double Promotion experience. Browse our collections, feel the quality, and discover pieces built for you.
              </p>
              <a href="/contact" className="btn-outline inline-block">
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-[#111111] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-base font-normal text-[#e8e8e8] mb-8 max-w-2xl mx-auto">
            Discover our latest collections or get in touch about wholesale opportunities.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/collection"
              className="px-8 py-3 bg-white text-[#111111] text-sm font-semibold tracking-widest uppercase hover:bg-[#F5F5F5] transition-colors inline-block"
            >
              Shop Collection
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[#111111] transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
