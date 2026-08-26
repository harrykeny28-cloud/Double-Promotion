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
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* WhatsApp official logo - telephone handset in speech bubble */}
          <path
            d="M20.52 3.449C18.9 1.386 16.643 0.254 14.175 0.254c-5.974 0-10.83 4.856-10.83 10.83 0 1.909.395 3.799 1.154 5.592L2.93 23.746l5.853-1.535c1.645.918 3.51 1.402 5.393 1.402h.002c5.974 0 10.83-4.856 10.83-10.83 0-2.89-1.133-5.604-3.19-7.446zm-6.345 16.686h-.002c-1.685 0-3.337-.452-4.775-1.298l-.343-.204-3.557.932 1.---7 3.48c-.921 1.263-1.43 2.757-1.43 4.383 0 4.971 4.04 9.011 9.011 9.011 2.411 0 4.68-.936 6.389-2.645 1.709-1.709 2.645-3.978 2.645-6.389 0-4.971-4.04-9.011-9.011-9.011z"
            fill="white"
          />
          <path
            d="M17.971 14.348c-.272-.136-1.617-.799-1.867-.89-.25-.09-.432-.136-.612.136-.18.272-.702.887-.86 1.067-.158.18-.317.203-.589.067-.272-.136-1.15-.424-2.191-1.352-.81-.721-1.356-1.612-1.514-1.884-.158-.272-.017-.42.119-.556.122-.12.272-.316.408-.475.136-.159.18-.272.272-.452.09-.18.045-.34-.023-.476-.068-.136-.612-1.479-.84-2.023-.22-.536-.444-.463-.612-.471-.158-.008-.34-.008-.522-.008-.18 0-.474.068-.722.34-.248.272-.952.93-.952 2.271 0 1.34.975 2.634 1.112 2.814.136.18 1.923 2.933 4.656 4.111.651.28 1.159.447 1.554.572.653.21 1.248.18 1.715.108.523-.078 1.612-.66 1.838-1.295.226-.635.226-1.18.159-1.295-.067-.115-.249-.182-.522-.318z"
            fill="white"
          />
        </svg>
      </a>
    </nav>
  )
}
