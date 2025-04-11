import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import React from 'react';

const ButtonAddToCart = () => {
    return (
        <Button
            variant='outlined'
            startIcon={<ShoppingCartIcon className='text-gray' />}
            sx={{
                border: "2px solid lightgray",
                color: "black",
                borderRadius: 100,
                fontWeight: 'bold',
                py: 1,
                textWrap: "nowrap",
                flexGrow: 0,
            }}
        >
            เพิ่มลงตระกร้า
        </Button>
    )
}

export default ButtonAddToCart