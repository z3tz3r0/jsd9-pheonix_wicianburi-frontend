import { ShoppingCart } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import Rating from "react-rating";
import { Link } from 'react-router';
import { CartContext } from '../context/CartContext';
import mockReviews from '../data/mockReviews';

const ProductCard = ({ product }) => {
  const [averageStars, setAverageStars] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    let averageStar = 0;
    const reviewsItems = mockReviews.filter((item) => item.product_id === product.product_id);
    if (!reviewsItems) {
      setAverageStars(averageStar);
    } else {
      const averageStar = reviewsItems.reduce((sum, review) => sum + review.stars, 0) / reviewsItems.length
      setAverageStars(averageStar.toFixed(1))
    }
  }, []);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const selectedVariant = product.variants[0];

    if (!selectedVariant) {
      console.error("Cannot add to cart: Variant is not found");
    }
    const itemToAdd = {
      product_id: product.product_id,
      name: product.name,
      variantValue: selectedVariant.value,
      variantLabel: selectedVariant.label,
      price: selectedVariant.price,
      image: product.image
    }
    addToCart(itemToAdd)
  }

  return (
    <Link
      className="block h-full"
      to={`/products/${product.product_id}`}
    >
      <div className='flex flex-col h-full bg-white rounded-lg shadow-md w-45 hover:shadow-lg'>
        <img
          src={`/${product.image}`}
          alt={product.name}
          className='object-cover h-40 rounded-t-lg w-45'
        />

        <div className='flex flex-col justify-between flex-grow p-4'>
          <div>
            <h3 className='text-sm font-semibold truncate'>{product.name}</h3>
            <p className='text-sm font-semibold text-gray-600'>฿{product.variants[0].price}</p>
          </div>

          <div className='flex items-center justify-between mt-2'>
            <div className='inline-flex items-center gap-[2px] text-[10px] text-yellow-400 overflow-hidden'>
              {/* Left: Star + reviews */}
              <Rating
                initialRating={averageStars}
                readonly
                fractions={2} // allows half-stars
                emptySymbol={<span className='text-gray-300 text-[10px]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                </svg>
                </span>}
                fullSymbol={<span className="text-yellow-400 text-[10px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                  <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
                </svg>
                </span>}
              />

              <span className='text-gray-500 text-[10px] ml-[2px] whitespace-nowrap'>({averageStars})</span>
            </div>

            {/* Right: Cart icon*/}
            <button
              onClick={handleAddToCart}
              className='ml-1.2 bg-gray-200 p-1.5 rounded-full hover:bg-gray-300 cursor-pointer'>
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard