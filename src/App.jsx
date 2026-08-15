import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

// Lazy load non-critical pages
const Collection = lazy(() => import('./pages/Collection'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

// Loading component for lazy pages
function PageLoader() {
  return (
    <div className="w-full bg-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#111111] mx-auto mb-4"></div>
        <p className="text-sm font-normal text-[#555555]">Loading...</p>
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Suspense fallback={<PageLoader />}><Collection /></Suspense>} />
          <Route path="/collection/:categoryId" element={<Suspense fallback={<PageLoader />}><Collection /></Suspense>} />
          <Route path="/product/:id" element={<Suspense fallback={<PageLoader />}><ProductDetail /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
