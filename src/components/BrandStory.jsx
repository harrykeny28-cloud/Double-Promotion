export default function BrandStory() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-[#e8e8e8]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Brand Story */}
          <div className="space-y-6 md:space-y-8 flex flex-col justify-center">
            <div>
              <p className="section-label mb-4">Our Story</p>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#111111] mb-6">
                Established 2005
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-base md:text-lg font-normal text-[#111111] leading-relaxed">
                Since 2005, Double Promotion has been a trusted name in premium men's fashion. We build essentials for the modern man — pieces designed to last, meant to be lived in.
              </p>
              <p className="text-base md:text-lg font-normal text-[#111111] leading-relaxed">
                From wholesale to retail, we're committed to quality, clean design, and simplicity. No excess. No compromise.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-sm font-semibold text-[#555555] tracking-wide">
                Wholesale & Retail
              </p>
            </div>
          </div>

          {/* Right: Visit Us / Location */}
          <div className="bg-[#F5F5F5] p-8 md:p-12 flex flex-col justify-center space-y-6">
            <div>
              <p className="section-label mb-3">Visit Us</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#111111]">
                Our Store
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-[#555555] tracking-widest uppercase mb-2">
                  Address
                </p>
                <p className="text-base font-normal text-[#111111]">
                  M.K Readymades<br />
                  No. 47-A Mettu Street<br />
                  Kanchipuram - 631501
                </p>
              </div>

              <div className="divider"></div>

              <div>
                <p className="text-xs font-semibold text-[#555555] tracking-widest uppercase mb-2">
                  Hours
                </p>
                <p className="text-base font-normal text-[#111111]">
                  Mon – Fri: 10am – 8pm<br />
                  Sat – Sun: 11am – 7pm
                </p>
              </div>

              <div className="divider"></div>

              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#555555] tracking-widest uppercase">
                  Contact
                </p>
                <a href="tel:+919876543210" className="text-base font-normal text-[#111111] hover:text-[#555555] transition-colors">
                  +91 98765 43210
                </a>
                <br />
                <a href="https://www.doublepromotion.com" className="text-base font-normal text-[#111111] hover:text-[#555555] transition-colors">
                  www.doublepromotion.com
                </a>
              </div>

              <div className="pt-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
