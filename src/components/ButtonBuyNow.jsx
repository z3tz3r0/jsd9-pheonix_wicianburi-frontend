import { Button } from "@/components/ui/button";
import React from 'react';

const ButtonBuyNow = () => {
    return (
        <Button
            className="w-full font-bold bg-black rounded-full cursor-pointer hover:bg-black/90 active:shadow-md"
        >
            ซื้อเลย
        </Button>
    );
}

export default ButtonBuyNow