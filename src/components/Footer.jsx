import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-white border-t border-[#e8e8e8]">
      <div className="container-max py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 pb-12 border-b border-[#e8e8e8]">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold tracking-widest text-[#111111] mb-4">
              DOUBLE PROMOTION
            </h3>
            <p className="text-sm font-normal text-[#555555]">
              Premium men's fashion since 2005.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-4">Navigation</p>
            <div className="space-y-3">
              <Link to="/" className="block text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors">
                Home
              </Link>
              <Link to="/collection" className="block text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors">
                Collection
              </Link>
              <Link to="/about" className="block text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-4">Contact</p>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="block text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors"
              >
                +91 98765 43210
              </a>
              <a
                href="https://www.doublepromotion.com"
                className="block text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors"
              >
                www.doublepromotion.com
              </a>
              <p className="text-sm font-normal text-[#111111]">
                M.K Readymades<br />
                No. 47-A Mettu Street<br />
                Kanchipuram - 631501
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="section-label mb-4">Follow</p>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="block text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs font-normal text-[#555555] gap-4">
          <p>
            &copy; {currentYear} Double Promotion. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#111111] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#111111] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
