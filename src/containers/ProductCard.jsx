import React from 'react'
import ButtonAddToCart from '../components/ButtonAddToCart'
import Rating from "react-rating"
{/*import { Card, CardMedia, CardContent, IconButton, Rating, Typography, Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';*/}

const ProductCard = ({ product }) => {
    return (
        <div className='bg-white rounded-lg shadow-md flex flex-col h-full w-45'>
            <img
            src={product.image}
            alt={product.name}
            className='w-45 h-40 object-cover rounded-t-lg'
            />

            <div className='p-4 flex flex-col flex-grow justify-between'>
                <div>
                    <h3 className='font-semibold text-sm truncate'>{product.name}</h3>
                    <p className='text-sm font-semibold text-gray-600'>{product.price}</p>
                </div>

                <div className='flex items-center justify-between mt-2'>
                    <div className='inline-flex items-center gap-[2px] text-[10px] text-yellow-400 overflow-hidden'>
                    {/* Left: Star + reviews */}
                    <Rating
                    initialRating={product.rating}
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
                
                <span className='text-gray-500 text-[10px] ml-[2px] whitespace-nowrap'>({product.reviews})</span>
                </div>

                    {/* Right: Cart icon*/}
                    <button className='ml-1.2 bg-gray-200 p-1.5 rounded-full hover:bg-gray-300'>
                    <span className='text-sm'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard