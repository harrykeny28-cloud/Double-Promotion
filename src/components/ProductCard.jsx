import { Link } from 'react-router-dom'
import OptimizedImage from './OptimizedImage'
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

export default function ProductCard({ product }) {
  const imageSrc = categoryImageMap[product.category]
  
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="bg-[#F5F5F5] aspect-square mb-4 overflow-hidden flex items-center justify-center relative">
          <OptimizedImage
            src={imageSrc}
            alt={product.name}
            width="400"
            height="400"
            loading="lazy"
            className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
          />
          {product.new && (
            <span className="absolute top-4 right-4 bg-[#111111] text-white text-xs font-semibold px-3 py-1 tracking-widest uppercase">
              New
            </span>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div>
            <p className="text-xs text-[#555555] font-normal mb-1">
              {product.categoryName}
            </p>
            <h3 className="text-base md:text-lg font-semibold text-[#111111] group-hover:text-[#555555] transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>

          <p className="text-xs md:text-sm font-normal text-[#555555] line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-[#111111]">
              {product.price}
            </span>
            <span className="text-xs text-[#555555]">
              {product.color}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
