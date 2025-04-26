// import { Button } from '@mui/material';
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import React from 'react';

const ButtonAddToCart = ({ onClick }) => {
  return (
    // <Button
    //     variant='outlined'
    //     startIcon={<ShoppingCartIcon className='text-gray' />}
    //     sx={{
    //         border: "2px solid lightgray",
    //         color: "black",
    //         borderRadius: 100,
    //         fontWeight: 'bold',
    //         py: 1,
    //         textWrap: "nowrap",
    //         flexGrow: 0,
    //     }}
    // >
    //     เพิ่มลงตระกร้า
    // </Button>
    <Button
      onClick={onClick}
      className="w-full font-bold text-black border-2 rounded-full cursor-pointer hover:bg-black/5 active:shadow-md"
    >
      <ShoppingCartIcon className='text-gray' />
      เพิ่มลงตระกร้า
    </Button>
  )
}

export default ButtonAddToCart