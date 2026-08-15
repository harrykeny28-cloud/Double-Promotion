import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products.json'
import OptimizedImage from '../components/OptimizedImage'
import tshirtImage from '../Assests/t-shirt.jpg'
import shirtImage from '../Assests/shirt.jpg'
import trousersImage from '../Assests/Trousers.jpg'
import jacketsImage from '../Assests/Jackets.jpg'
import chinosImage from '../Assests/Chinos.jpg'
import poloImage from '../Assests/Polo shirt.jpg'

const categoryImageMap = {
  tshirts: tshirtImage,
  shirts: shirtImage,
  trousers: trousersImage,
  jackets: jacketsImage,
  chinos: chinosImage,
  polos: poloImage,
}

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const p = products.find(prod => prod.id === parseInt(id))
    if (p) {
      setProduct(p)
      setSelectedSize(p.sizes?.[0] || '')
    }
  }, [id])

  if (!product) {
    return (
      <div className="w-full bg-white min-h-screen flex items-center justify-center">
        <p className="text-lg text-[#555555]">Product not found</p>
      </div>
    )
  }

  const productImage = categoryImageMap[product.category]

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#e8e8e8] bg-white py-4 sticky top-16 z-40">
        <div className="container-max">
          <div className="flex items-center gap-3 text-sm font-semibold text-[#555555]">
            <Link to="/collection" className="hover:text-[#111111] transition-colors">
              Collection
            </Link>
            <span>/</span>
            <Link
              to={`/collection/${product.category}`}
              className="hover:text-[#111111] transition-colors"
            >
              {product.categoryName}
            </Link>
            <span>/</span>
            <span className="text-[#111111]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Content */}
      <div className="container-max py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Product Image */}
          <div>
            <div className="bg-[#F5F5F5] aspect-square mb-4 overflow-hidden flex items-center justify-center">
              <OptimizedImage
                src={productImage}
                alt={product.name}
                width="500"
                height="500"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-[#555555] tracking-widest uppercase mb-2">
                  {product.categoryName}
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold text-[#111111]">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-2xl font-semibold text-[#111111]">
                  {product.price}
                </span>
                <span className="text-sm font-normal text-[#555555]">
                  {product.color}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 border-t border-b border-[#e8e8e8] py-6">
              <p className="text-base font-normal text-[#111111] leading-relaxed">
                {product.description}
              </p>
              <p className="text-sm font-normal text-[#555555] leading-relaxed">
                {product.details}
              </p>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <label className="block">
                <p className="text-xs font-semibold text-[#555555] tracking-widest uppercase mb-3">
                  Select Size
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes?.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-2 text-sm font-semibold text-center border transition-all ${
                        selectedSize === size
                          ? 'border-[#111111] bg-[#111111] text-white'
                          : 'border-[#e8e8e8] text-[#111111] hover:border-[#111111]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </label>
            </div>

            {/* Quantity */}
            <div className="space-y-4">
              <label className="block">
                <p className="text-xs font-semibold text-[#555555] tracking-widest uppercase mb-3">
                  Quantity
                </p>
                <div className="flex items-center gap-4 w-max">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-[#e8e8e8] flex items-center justify-center hover:border-[#111111] transition-colors font-semibold"
                  >
                    −
                  </button>
                  <span className="text-base font-semibold w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-[#e8e8e8] flex items-center justify-center hover:border-[#111111] transition-colors font-semibold"
                  >
                    +
                  </button>
                </div>
              </label>
            </div>

            {/* Add to Cart / Contact */}
            <div className="space-y-4 pt-4">
              <button className="btn-primary w-full text-center">
                Add to Cart
              </button>
              <p className="text-xs font-normal text-[#555555] text-center">
                For wholesale inquiries, please{' '}
                <Link to="/contact" className="text-[#111111] hover:text-[#555555] transition-colors">
                  contact us
                </Link>
              </p>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 pt-4 border-t border-[#e8e8e8]">
              <div>
                <p className="text-xs font-semibold text-[#555555] tracking-widest uppercase mb-2">
                  Shipping & Returns
                </p>
                <p className="text-sm font-normal text-[#555555] leading-relaxed">
                  Free shipping on orders over ₹5,000. Easy returns within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-[#e8e8e8]">
          <div className="mb-8">
            <p className="section-label mb-4">Explore</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111111]">
              More from {product.categoryName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((p) => (
                <Link key={p.id} to={`/product/${p.id}`}>
                  <div className="group cursor-pointer">
                    <div className="bg-[#F5F5F5] aspect-square mb-4 overflow-hidden flex items-center justify-center">
                      <OptimizedImage
                        src={categoryImageMap[p.category]}
                        alt={p.name}
                        width="400"
                        height="400"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-[#111111] group-hover:text-[#555555] transition-colors line-clamp-2">
                        {p.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-base font-semibold text-[#111111]">
                          {p.price}
                        </span>
                        <span className="text-xs text-[#555555]">{p.color}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
