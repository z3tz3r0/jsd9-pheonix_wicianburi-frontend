import { Button } from '@mui/material';
import React from 'react';



const ButtonBuyNow = () => {
    return (

        <Button
            variant="contained"
            sx={{
                borderRadius: 100,
                background: "black",
                // width: "100%",
                flexGrow: 2,
                fontWeight: 'Bold',
                py: 1
            }}
        >
            ซื้อเลย
        </Button>
    )
}

export default ButtonBuyNow