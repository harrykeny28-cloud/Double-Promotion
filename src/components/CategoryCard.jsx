import { Link } from 'react-router-dom'
import OptimizedImage from './OptimizedImage'
import tshirtImage from '../Assests/t-shirt.jpg'
import shirtImage from '../Assests/shirt.jpg'
import trousersImage from '../Assests/Trousers.jpg'
import jacketsImage from '../Assests/Jackets.jpg'
import chinosImage from '../Assests/Chinos.jpg'
import poloImage from '../Assests/Polo shirt.jpg'

const imageMap = {
  tshirts: tshirtImage,
  shirts: shirtImage,
  trousers: trousersImage,
  jackets: jacketsImage,
  chinos: chinosImage,
  polos: poloImage,
}

export default function CategoryCard({ category }) {
  const imageSrc = imageMap[category.id]
  
  return (
    <Link to={`/collection/${category.id}`}>
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="bg-[#F5F5F5] aspect-square mb-4 overflow-hidden flex items-center justify-center">
          <OptimizedImage
            src={imageSrc}
            alt={category.name}
            width="400"
            height="400"
            loading="lazy"
            className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-300"
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-semibold text-[#111111] group-hover:text-[#555555] transition-colors">
            {category.name}
          </h3>
          <p className="text-xs md:text-sm font-normal text-[#555555]">
            {category.description}
          </p>
          <p className="text-xs text-[#555555] font-normal">
            {category.itemCount} Items
          </p>
        </div>
      </div>
    </Link>
  )
}
