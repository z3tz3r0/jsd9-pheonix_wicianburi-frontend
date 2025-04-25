import {
  SelectGroup,
  SelectItem,
  SelectLabel
} from "@/components/ui/select"
import StarIcon from '@mui/icons-material/Star'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import React from 'react'
import ButtonAddToCart from '../components/ButtonAddToCart'
import ButtonMain from "../components/ButtonMain"
import Dropdown from '../components/Dropdown'
import ProductNumberField from '../components/ProductNumberField'


const ProductDetails = ({ image, name, price, description, star, numbersReview }) => {
  return (
    <div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">

        <img src={image} className='my-4 rounded-3xl sm:rounded-xl' alt="" />

        <div>
          <h1 className="mb-4 text-xl font-bold md:text-2xl">{name}</h1>

          <p className='mb-4 text-4xl font-bold md:text-4xl'>฿{Intl.NumberFormat('th-TH').format(price)}</p>

          <p className='mb-4 text-sm text-gray-400 md:text-base'>{description}</p>

          <div className='flex items-center my-4 sm:my-2'>
            <StarIcon className='mr-1 text-gray' />
            <p className='mr-2 font-bold'>{star}</p>
            <p className='text-gray-400'>({Intl.NumberFormat('th-TH').format(numbersReview)})</p>
          </div>

          <FormControl fullWidth sx={{ my: 2, pr: { xs: 0, lg: 20 } }}>
            <div className='flex justify-between'>
              <Dropdown label="กรุณาเลือกปริมาณ" size="small" className="w-3/5">
                <SelectGroup>
                  <SelectLabel>ปริมาณ</SelectLabel>
                  <SelectItem value={1}>1 กิโลกรัม</SelectItem>
                  <SelectItem value={5}>5 กิโลกรัม</SelectItem>
                </SelectGroup>
              </Dropdown>
              <Stack direction={'row'}>
                <ProductNumberField />
              </Stack>
            </div>

            <div className='flex flex-col gap-4 my-8 sm:flex-row'>
              <ButtonMain>ซื้อเลย</ButtonMain>
              <ButtonAddToCart />
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails