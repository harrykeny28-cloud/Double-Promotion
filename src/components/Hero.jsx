import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="w-full bg-white pt-12 md:pt-24 pb-16 md:pb-32">
      <div className="container-max">
        <div className="space-y-8 md:space-y-12">
          {/* Main Brand Name */}
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#111111]">
              Double Promotion
            </h1>
          </div>

          {/* ========================================= PREMIUM SINCE 2005 BANNER - VARIATION 6 ========================================= */}
          <div
            className="relative w-full overflow-hidden bg-gradient-to-r from-[#555555] via-[#666666] to-[#555555] shadow-md"
            style={{
              height: 'clamp(80px, 7vw, 105px)',
            }}
          >
            {/* LEFT EDGE - Angled Gold Cuts */}
            <div
              className="absolute left-0 top-0 h-full"
              style={{
                width: '105px',
              }}
            >
              {/* Main stripe */}
              <div
                className="absolute top-0 h-full"
                style={{
                  width: '10px',
                  left: '34px',
                  top: '-5%',
                  height: '110%',
                  transform: 'skewX(-24deg)',
                  background: 'linear-gradient(#b38b22, #f1d77a, #b38b22)',
                }}
              />
              {/* Secondary stripe */}
              <div
                className="absolute top-0 h-full"
                style={{
                  width: '4px',
                  left: '53px',
                  top: '0',
                  height: '100%',
                  transform: 'skewX(-24deg)',
                  background: 'linear-gradient(#b38b22, #f1d77a, #b38b22)',
                }}
              />
            </div>

            {/* RIGHT EDGE - Angled Gold Cuts (mirrored) */}
            <div
              className="absolute right-0 top-0 h-full"
              style={{
                width: '105px',
              }}
            >
              {/* Main stripe */}
              <div
                className="absolute top-0 h-full"
                style={{
                  width: '10px',
                  right: '34px',
                  top: '-5%',
                  height: '110%',
                  transform: 'skewX(24deg)',
                  background: 'linear-gradient(#b38b22, #f1d77a, #b38b22)',
                }}
              />
              {/* Secondary stripe */}
              <div
                className="absolute top-0 h-full"
                style={{
                  width: '4px',
                  right: '53px',
                  top: '0',
                  height: '100%',
                  transform: 'skewX(24deg)',
                  background: 'linear-gradient(#b38b22, #f1d77a, #b38b22)',
                }}
              />
            </div>

            {/* ========================================= CENTER CONTENT ========================================= */}
            <div className="absolute inset-0 flex items-center justify-center px-16 sm:px-20 md:px-32">
              <div className="flex w-full max-w-2xl items-center justify-center gap-2 sm:gap-3 md:gap-5">
                {/* LEFT GOLD LINE */}
                <span className="h-px flex-1 max-w-[90px] sm:max-w-[130px] md:max-w-[180px] bg-[#D4AF37]" />

                {/* LEFT STAR */}
                <span className="flex-shrink-0 text-sm sm:text-base md:text-xl text-[#D4AF37]">★</span>

                {/* SINCE 2005 */}
                <span className="flex-shrink-0 whitespace-nowrap text-xs sm:text-sm md:text-lg lg:text-3xl font-semibold tracking-[0.12em] md:tracking-[0.11em] text-[#D4AF37]">
                  SINCE 2005
                </span>

                {/* RIGHT STAR */}
                <span className="flex-shrink-0 text-sm sm:text-base md:text-xl text-[#D4AF37]">★</span>

                {/* RIGHT GOLD LINE */}
                <span className="h-px flex-1 max-w-[90px] sm:max-w-[130px] md:max-w-[180px] bg-[#D4AF37]" />
              </div>
            </div>
          </div>

          {/* ========================================= SUBLINE ========================================= */}
          <div>
            <p className="text-xl md:text-5xl font-semibold tracking-wide text-[#364153]">
              Wholesale & Retail
            </p>
          </div>

          {/* ========================================= CTA ========================================= */}
          <div className="pt-4 md:pt-4">
            <Link to="/collection" className="btn-primary">
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
