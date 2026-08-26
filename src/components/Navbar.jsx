import { useState } from 'react'
import { Link } from 'react-router-dom'

const WHATSAPP_NUMBER = '919876543210' // Format for wa.me API
const WHATSAPP_MESSAGE = "Hi, I'm interested in your readymade dresses. What dresses do you offer?"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const encodeMessage = (text) => {
    return encodeURIComponent(text)
  }

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeMessage(WHATSAPP_MESSAGE)}`

  return (
    <nav className="w-full bg-white border-b border-[#e8e8e8] sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-lg md:text-xl font-bold tracking-widest text-[#111111] hover:text-[#555555] transition-colors">
            DOUBLE PROMOTION
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/collection" className="nav-link">
              Collection
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#e8e8e8] py-4 space-y-4">
            <Link
              to="/"
              className="block nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/collection"
              className="block nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collection
            </Link>
            <Link
              to="/about"
              className="block nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Social Subsection */}
            <div className="pt-4 border-t border-[#e8e8e8]">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#999999] mb-4">
                Social
              </p>
              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#20BA5A] transition-all duration-200 z-40"
        title="Chat with us on WhatsApp"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.95 1.494h-.006v-.005C3.055 8.926 1.5 12.004 1.5 15.478 1.5 21.404 6.596 26.5 12.522 26.5c2.905 0 5.606-.956 7.813-2.573l.002.001c.124-.082.244-.168.361-.256.028-.021.058-.041.085-.062 1.648-1.377 2.993-3.128 3.866-5.08.176-.41.332-.83.469-1.259.047-.15.094-.3.137-.452.178-.66.29-1.348.29-2.062 0-5.926-4.821-10.747-10.747-10.747z" />
        </svg>
      </a>
    </nav>
  )
}
