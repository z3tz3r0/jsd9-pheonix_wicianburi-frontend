import {
  SelectGroup,
  SelectItem,
  SelectLabel
} from "@/components/ui/select"
import StarIcon from '@mui/icons-material/Star'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router"
import ButtonAddToCart from '../components/ButtonAddToCart'
import ButtonMain from "../components/ButtonMain"
import Dropdown from '../components/Dropdown'
import ProductNumberField from '../components/ProductNumberField'
import { CartContext } from "../context/CartContext"


const ProductDetails = ({ productItem, reviews }) => {

  const productVariants = productItem?.variants || [];
  const [selectedVariantValue, setSelectedVariantValue] = useState(() => productVariants.length > 0 ? productVariants[0].value : "");
  const [selectingPrice, setSelectingPrice] = useState(() => productVariants.length > 0 ? productVariants[0].price : 0);
  const [productAmount, setProductAmount] = useState(1);
  const reviewCount = Array.isArray(reviews) ? reviews.length : 0;
  const averageStars = Array.isArray(reviews) && reviewCount > 0 ? (reviews.reduce((sum, review) => sum + review.stars, 0)) / reviewCount : 0
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();


  // Dropdown value controller
  const handleValueChange = (selectedValue) => {
    const selectedVariant = productVariants.find(variant => variant.value === selectedValue);
    if (selectedVariant) {
      setSelectingPrice(selectedVariant.price);
      setSelectedVariantValue(selectedValue);
    } else {
      console.error("Selected variant not found: ", selectedValue);
    }

  }


  const prepareCartItem = () => {
    const selectedVariant = productVariants.find(variant => variant.value === selectedVariantValue);

    if (!selectedVariant) {
      console.error("Cannot add to cart: Variant is not selected or not found")
      return null;
    }
    if (!productItem || !productItem.product_id) {
      console.error("Cannot add to cart: Product data is missing");
      return null;
    }

    return {
      product_id: productItem.product_id,
      name: productItem.name,
      variantValue: selectedVariant.value,
      variantLabel: selectedVariant.label,
      price: selectingPrice,
      quantity: productAmount,
      image: productItem.image
    }
  }

  // TODO: handle add to cart make it simple log to the console first
  const handleAddToCartClick = () => {
    const itemToAdd = prepareCartItem();
    if (itemToAdd) {
      console.log("Adding to cart: ", itemToAdd);
      addToCart(itemToAdd);
    } else {
      console.error("Failed to add item to cart due to mising info.")
    }

  };


  // TODO: handle buy now, redirect to the Checkout page with current information
  // probably like submit the form.
  const handleBuyNowClick = () => {
    const itemToAdd = prepareCartItem();
    if (itemToAdd) {
      console.log("Adding to cart: ", itemToAdd);
      addToCart(itemToAdd);
      console.log("Item added, navigating to confirm order...");
      navigate('/cart');
    } else {
      console.error("Failed to add item to cart due to mising info.")
    }
  };


  return (
    <div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">

        <img src={`../${productItem.image}`} className='my-4 rounded-3xl sm:rounded-xl' alt="" />

        <div className="w-full sm:py-8 md:py-12">
          <h1 className="mb-4 text-xl font-bold md:text-2xl">{productItem.name}</h1>

          <p className='mb-4 text-4xl font-bold md:text-4xl'>฿{Intl.NumberFormat('th-TH').format(selectingPrice)}</p>

          <p className='mb-4 text-sm text-gray-400 md:text-base'>{productItem.description}</p>

          <div className='flex items-center my-4 sm:my-2'>
            <StarIcon className={`mr-1 ${averageStars >= 0 ? "text-yellow-500" : "text-gray"}`} />
            <p className='mr-2 font-bold'>{averageStars.toFixed(2)}</p>
            <p className='text-gray-400'>({Intl.NumberFormat('th-TH').format(reviewCount)})</p>
          </div>

          <FormControl fullWidth sx={{ my: 2 }}>
            <div className='flex justify-between'>
              <Dropdown value={selectedVariantValue} onValueChange={handleValueChange} label="กรุณาเลือกปริมาณ" size="small" className="w-3/5">
                <SelectGroup>
                  <SelectLabel>ปริมาณ</SelectLabel>
                  {productVariants.map((variant, index) => (
                    <SelectItem key={index + 1} value={variant.value}>{variant.label}</SelectItem>
                  ))}
                </SelectGroup>
              </Dropdown>
              <Stack direction={'row'}>
                <ProductNumberField productAmount={productAmount} setProductAmount={setProductAmount} />
              </Stack>
            </div>

            <div className='flex flex-col w-full gap-4 my-8 sm:max-w-40 sm:flex-row'>
              <ButtonMain onClick={handleBuyNowClick} className="active:bg-black">ซื้อเลย</ButtonMain>
              <ButtonAddToCart onClick={handleAddToCartClick} />
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails